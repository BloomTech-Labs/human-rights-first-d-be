//imports
const server = require('../app');
const request = require('supertest');

describe('/ds_server/', function () {
  it('us_map 200', async () => {
    const res = await request(server).post('/ds_server/us_map').send({
      start_date: '2013-01-01',
      end_date: '2019-01-01',
      sort_by: 'Demographic',
    });

    expect(res.status).toBe(200);
  });
  it('us_map 200 missing all of post input', async function () {
    const res = await request(server).post('/ds_server/us_map').send();

    expect(res.status).toBe(200);
  });
  it('us_map 200 missing part of post input', async function () {
    const res = await request(server).post('/ds_server/us_map').send({
      start_date: '2013-01-01',
      end_date: '2019-01-01',
    });

    expect(res.status).toBe(200);
  });
});
