
const request = require('supertest');
const express = require('express');
const taskApi = require('../../api/taskApi');

const app = express();
app.use(express.json());
app.use('/api', taskApi);

describe('Task API Tests', () => {

  test('GET /tasks', async () => {
    const response = await request(app).get('/api/tasks');

    expect(response.statusCode).toBe(200);
  });

  test('POST /tasks', async () => {
    const response = await request(app)
      .post('/api/tasks')
      .send({ title: 'New Task' });

    expect(response.statusCode).toBe(201);
  });

});