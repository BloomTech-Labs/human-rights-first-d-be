//libraries
const server = require('../app')
const request = require('supertest')

describe('/us_pie_vic', () => {
  it('200 valid inputs are given', async () => {
    const res = await request(server).post('/ds_server/us_pie_vic')

    expect(res.body).toEqual(expect.any(String))
    expect(res.status).toBe(200)
  })
})
