const request = require('supertest');
const app = require('../app/app');
const mongoose = require('mongoose');  // 👈 Add this

describe('GET /todos', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
  });

  afterAll(async () => {
    await mongoose.connection.close();  // 👈 Close MongoDB after tests
  });
});
