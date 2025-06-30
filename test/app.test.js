const request = require('supertest');
const app = require('../app/app');

describe('GET /todos', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
  });
});
