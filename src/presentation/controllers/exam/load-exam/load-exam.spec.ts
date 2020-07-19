import app from '../../../app'
import request from 'supertest'

describe('LoadExammController', () => {
  test('Should return 500 if server is not running', async () => {
    const httpResponse = await request(app)
      .get('/exam')
    const response = httpResponse.body
    expect(httpResponse.statusCode).toBe(500)
    expect(response.body).toEqual({ name: 'ServerError' })
  })
})
