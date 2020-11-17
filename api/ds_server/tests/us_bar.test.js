//libraries
const server = require('../../app')
const request = require('supertest')


describe('/us_bar', () => {
  it('200 default input pass data to client', async () => {
    const res = await request(server).post(`/ds_server/us_bar`)

    /*
    defaul values automatically added
      start_date = "2013-01-01"
      end_date = "2019-01-01"
      group_by = {National: true}
      asc = true
    */
    expect(res.status).toBe(200)
    expect(res.body).toEqual(expect.any(String))

  })

  it('200 Zipcode are accepted, asc false works', async () => {
    const res = await request(server).post('/ds_server/us_bar').send({
      group_by: {Zipcode: [18201, 18202]},
      asc: false
    })
    expect(res.body).toEqual(expect.any(String))
    expect(res.body).toMatch(/18201/i)
    expect(res.status).toBe(200)
  })

  // currect City endpoint is broken at the moment until forther notice
  it('City 404 valid input but city has no accidents', async () => {
      const res = await request(server).post('/ds_server/us_bar').send({
        group_by: {City: ["Atlanta,Ga"]}
      })

      expect(res.status).toBe(404)
      expect(res.body.Error).toMatch(/no incident/i)
  })
  it('404 check fail when gorup_by: zipcode is not an array, and asc is not bool', async () =>{
    const res = await request(server).post('/ds_server/us_bar').send({
      group_by: {Zipcode: 18201}
    })

    expect(res.status).toBe(404)
  })
})
