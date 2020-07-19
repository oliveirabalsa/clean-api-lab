import app from '../../../app'
import request from 'supertest'

describe('LoadLaboratoryController', () => {
  test('Should return 404 if no id is provided', async () => {
    const httpResponse = await request(app)
      .get('/laboratory')
    const response = httpResponse.body
    expect(httpResponse.statusCode).toBe(500)
    expect(response.body).toEqual({ name: 'ServerError' })
  })
})
