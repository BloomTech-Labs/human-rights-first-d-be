//imports
const server = require('../../app')
const request = require('supertest')

describe('/us_map/', () => {
  it('200 default valus are working', async () => {
    const res = await request(server).post('/ds_server/us_map')

    const ds_data = JSON.stringify(res.body)
    expect(res.status).toBe(200)
    expect(ds_data).toMatch(/data/i)
    expect(ds_data).toMatch(/layout/i)
  })
  it('200 default inputs works', async function () {
    const res = await request(server).post('/ds_server/us_map').send()

    expect(res.status).toBe(200)
    
    const ds_data = JSON.stringify(res.body)
    expect(ds_data).toMatch(/data/i)
    expect(ds_data).toMatch(/layout/i)
  })
  it('200 sort_by Gender is valid', async () => {
    const res = await request(server).post('/ds_server/us_map').send({
      sort_by: 'Gender'
    })

    expect(res.status).toBe(200)

    const ds_data = JSON.stringify(res.body)
    expect(ds_data).toMatch(/data/i)
    expect(ds_data).toMatch(/layout/i)
  })
  it('200 sort_by Armed/Unarmed is valid', async () => {
    const res = await request(server).post('/ds_server/us_map').send({
      sort_by: 'Armed/Unarmed'
    })

    expect(res.status).toBe(200)

    const ds_data = JSON.stringify(res.body)
    expect(ds_data).toMatch(/data/i)
    expect(ds_data).toMatch(/layout/i)
  })
  it('404 incorrect start_date', async () => {
    const res = await request(server).post('/ds_server/us_map').send({
      start_date: '01-01-2013',
    })

    const errors = JSON.stringify(res.body)
    expect(res.status).toBe(404)
    expect(errors).toMatch(/Must be YYYY\/MM\/DD/i)
  })
  it('404 incorrect end_date', async () => {
    const res = await request(server).post('/ds_server/us_map').send({
      end_date: '01-01-2019'
    })

    const errors = JSON.stringify(res.body)
    expect(res.status).toBe(404)
    expect(errors).toMatch(/Must be YYYY\/MM\/DD/i)
  })
  it('404 invalid sort_by not one of the options', async () => {
    const res = await request(server).post('/ds_server/us_map').send({
      sort_by: 'not one of the valid options'
    })

    const errors = JSON.stringify(res.body)
    expect(res.status).toBe(404)
    expect(errors).toMatch(/Must be Armed\/Unarrmed. Demographic, or Gender/i)
  })
})
