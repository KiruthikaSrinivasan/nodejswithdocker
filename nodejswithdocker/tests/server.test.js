const request = require('supertest');
const app = require('../server');
let server;

beforeAll(() => {
  server = app.listen(3000);
});

afterAll(() => {
  server.close();
});
describe('GET /', () => {
  it('should return Hello World message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World');
  });
});
