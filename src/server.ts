import Fastify, { FastifyInstance } from 'fastify';

const server: FastifyInstance = Fastify({});

export const testServer = server.get('/ping', async (req, res) => {
  res.status(200).send({'ping': "salut", 'response': "ici la route get afin d'envoyer ping" });
});

server.get('/pong', async (req, res) => {
  res.status(200).send({'pong':"re bonjour", 'response':"ici l'autre route get afin d'envoyer pong" });
});

const start = async () => {
  try {
    await server.listen(3000);
    const address = server.server.address();
    const port = typeof address === 'string' ? address : address?.port;
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
