#!/bin/bash
set -eu

echo "📦 Starting postgres container"

if docker ps -f name=pg | grep -w pg; then
  read -p "🔴 Container already running. Delete it and restart it?" yn
  case $yn in
    [Yy]* ) docker stop pg;;
    * ) echo "Abort"; exit;
  esac
fi

container_id=$(docker run -d --name pg --rm -p 5433:5432 -e POSTGRES_USER=postgres -e POSTGRES_DB=test -e POSTGRES_PASSWORD=postgres postgres)

echo "Container ID : ${container_id}"

echo "🏁 Waiting for container ready"

while [ "`docker inspect -f {{.State.Status}} ${container_id}`" != "running" ]; do sleep 1; done

echo "🐘 Waiting for postgres"

while ! docker exec "${container_id}" pg_isready; do sleep 1; done

echo "🚧 Create database structure (src/structure.sql)"

docker cp src/structure.sql pg:/;
docker exec pg psql -U postgres -d test -f structure.sql > /dev/null


echo "📝 Insert data for local testing (src/test_data.sql)"

docker cp src/test_data.sql pg:/;
docker exec pg psql -U postgres -d test -f test_data.sql > /dev/null

echo "🏗 Run src/migrations/*.sql scripts"

# Avoid entering loop if no sql file in migrations
shopt -s nullglob
for f in src/migrations/*.sql; do
  docker cp $f pg:/;
  docker exec pg psql -U postgres -d test -a -f $(basename -- $f)
done
