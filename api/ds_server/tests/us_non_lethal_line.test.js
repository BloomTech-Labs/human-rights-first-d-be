//libraries
const server = require('../../app')
const request = require('supertest')

describe('​/us_non_lethal_line', () => {
  it('200 data is pass down to client', async () => {
    const res = await request(server).get('/ds_server/us_non_lethal_line')

    expect(res.status).toBe(200)
  })
})