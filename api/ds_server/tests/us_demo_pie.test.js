//imports
const server = require('../../app')
const request = require('supertest')

describe('/us_demo_pie', () => {
  it('defaul values 200 US', async () => {
    const res = await request(server).post('/ds_server/us_demo_pie')

    expect(res.status).toBe(200)
    expect(res.body).toEqual(expect.any(String))
  })
  it('200 passing date to client with valid input',  async () => {
    const res = await request(server).post(`/ds_server/us_demo_pie`).send({
      user_input: "FL"
    }) 

    expect(res.body).toEqual(expect.any(String))
    expect(res.status).toBe(200)
  })

  it('404 input is NONE Alpha', async () => {
    const res = await request(server).post('/ds_server/us_demo_pie').send({
      user_input: "11"
    })
    const errors = JSON.stringify(res.body)
    expect(res.status).toBe(404)
    expect(errors).toMatch(/must be letters/i)
  })
  it('404 input is length is not 2', async () => {
    const res = await request(server).post('/ds_server/us_demo_pie').send({
      user_input: "FLO"
    })
    
    const errors = JSON.stringify(res.body)
    expect(res.status).toBe(404)
    expect(errors).toMatch(/must be 2 charts/i)
  })
})
