import { testServer } from '../server';
import fastify, { FastifyInstance } from 'fastify';
describe('users web', () => {
  let app: FastifyInstance;

  beforeAll(() => {
    app = testServer;
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe('/ping', () => {
    it('return 200 in /ping get route', async () => {
      const res = await app.inject({
        method: 'GET',
        path: '/ping',
      });
      expect(res.statusCode).toBe(200);
    });
  });
});
