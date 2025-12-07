const request = require('supertest');
const app = require('../server');

describe('Book Backend API', () => {
  // Test GET home route
  test('should respond with welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Book Backend API is running!');
  });

  // Test GET /api/books route
  test('should get all books', async () => {
    const response = await request(app).get('/api/books');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});