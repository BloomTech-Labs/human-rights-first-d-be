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
        console.log(res.body)
    })
})

describe('404 status', () => {
    it('check dataset, filter, and count valitation error msg', async () => {
        const res = await request(server).post(url).send({
            dataset: 'Not_PViolence_or_killings',
            filter: 'not_State_or_City',
            count: 'not a number',
        })

        expect(res.status).toBe(404)

        const errors = JSON.stringify(res.body)
        expect(errors).toMatch(/dataset/i)
        expect(errors).toMatch(/filter/i)
        expect(errors).toMatch(/count/i)
    })
})