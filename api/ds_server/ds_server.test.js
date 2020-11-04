//imports
/* 
server
supertest 
*/
const server = require('../app');
const request = require('supertest');

describe('ds_server', function () {
  it('/ds_server 200', async () => {
    const res = await request(server).get('/ds_server/unemploymentrate/FL');

    expect(res.status).toBe(201);
  });
});
