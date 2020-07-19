import app from '../../../app'
import request from 'supertest'

describe('UpdateLaboratoryController', () => {
  test('Should return 400 if no name is provided', async () => {
    const httpResponse = await request(app)
      .put('/laboratory/1')
      .send({
        address: 'valid_address',
        status: true
      })
    const response = httpResponse.body
    expect(httpResponse.statusCode).toBe(400)
    expect(response.body).toEqual({ name: 'Missing param: name' })
  })

  test('Should return 400 if no address is provided', async () => {
    const httpResponse = await request(app)
      .put('/laboratory/1')
      .send({
        name: 'valid_name',
        status: true
      })
    const response = httpResponse.body
    expect(httpResponse.statusCode).toBe(400)
    expect(response.body).toEqual({ name: 'Missing param: address' })
  })

  test('Should return 400 if no status is provided', async () => {
    const httpResponse = await request(app)
      .put('/laboratory/1')
      .send({
        name: 'valid_name',
        address: 'valid_address'
      })
    const response = httpResponse.body
    expect(httpResponse.statusCode).toBe(400)
    expect(response.body).toEqual({ name: 'Missing param: status' })
  })
})
