import app from '../../../app'
import request from 'supertest'

describe('DeleteLaboratoryController', () => {
  test('Should return 400 if no id is provided', async () => {
    const httpResponse = await request(app)
      .delete('/laboratory')
    const response = httpResponse.body
    expect(httpResponse.statusCode).toBe(404)
    expect(response.body).toEqual('Invalid method or endpoint')
  })
})
