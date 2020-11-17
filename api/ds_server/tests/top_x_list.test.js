// libraries
const server = require('../../app')
const request = require('supertest')

const url = '/ds_server/top_x_list'

describe('200 status', () => {
    it('default values work', async () =>{
        const res = await request(server).post(url)

        expect(res.status).toBe(200)
        expect(res.body).toMatch(/data/i)
        expect(res.body).toMatch(/layout/i)
    })
    it.todo('check last remaing options')
})

describe('404 status', () => {
    it.todo('check dataset, filter, and count valitation error msg')
})