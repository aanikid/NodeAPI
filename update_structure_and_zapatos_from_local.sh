set -eu

echo "Regenerate zapatos typescript definitions"
npx zapatos

echo "Regenerate structure.sql using pg_dump"
pg_dump -s postgres://postgres:postgres@localhost:5433/test | sed -e '/^--/d' > src/structure.sql
