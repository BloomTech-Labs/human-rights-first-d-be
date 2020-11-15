//imports
const server = require('../app')
const request = require('supertest')

describe('/us_map/', () => {
  it('200 validate inputs', async () => {
    const res = await request(server).post('/ds_server/us_map').send({
      start_date: '2013-01-01',
      end_date: '2019-01-01',
      sort_by: 'Demographic',
    })

    expect(res.status).toBe(200)
  })
  it('200 default inputs works', async function () {
    const res = await request(server).post('/ds_server/us_map').send()

    expect(res.status).toBe(200)
  })
  it('200 sort_by Gender is valid', async () => {
    const res = await request(server).post('/ds_server/us_map').send({
      sort_by: 'Gender'
    })

    expect(res.status).toBe(200)
    expect(res.body).toEqual(expect.any(String))
  })
  it('200 sort_by Armed/Unarmed is valid', async () => {
    const res = await request(server).post('/ds_server/us_map').send({
      sort_by: 'Armed/Unarmed'
    })

    expect(res.status).toBe(200)
    expect(res.body).toEqual(expect.any(String))
  })
  it('404 incorrect start_date', async () => {
    const res = await request(server).post('/ds_server/us_map').send({
      start_date: '01-01-2013',
    })

    expect(res.status).toBe(404)
    expect(res.body.invalid_input).toEqual(expect.any(String))
  })
  it('404 incorrect end_date', async () => {
    const res = await request(server).post('/ds_server/us_map').send({
      end_date: '01-01-2019'
    })

    expect(res.status).toBe(404)
    expect(res.body.invalid_input).toEqual(expect.any(String))
  })
  it('404 invalid sort_by not one of the options', async () => {
    const res = await request(server).post('/ds_server/us_map').send({
      sort_by: 'not one of the valid options'
    })

    expect(res.status).toBe(404)
    expect(res.body.invalid_input).toEqual(expect.any(String))
  })
})
