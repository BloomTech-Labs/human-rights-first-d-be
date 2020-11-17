//libraries
const server = require('../../app')
const request = require('supertest')

describe('/us_non_lethal', () => {
  it('200 receive data, and return it', async () => {
    const res = await request(server).get('/ds_server/us_non_lethal')

    expect(res.body).toEqual(expect.any(String))
    expect(res.status).toBe(200)
  })
})
