// libraries
const server = require('../../app')
const request = require('supertest')

const url = '/ds_server/top_x_list'

describe('200 status', () => {
    it('default values work', async () =>{
        const res = await request(server).post(url)

        expect(res.status).toBe(200)
        expect(res.body).toEqual(expect.any(String))
    })
    it('check last remaing options', async () =>{
        const res = await request(server).post(url).send({
            dataset: 'Killings',
            filter: 'City',
            count: 100,
        })

        expect(res.status).toBe(200)
        expect(res.body).toEqual(expect.any(String))
    })
})

describe('404 status', () => {
    it.todo('check dataset, filter, and count valitation error msg')
})