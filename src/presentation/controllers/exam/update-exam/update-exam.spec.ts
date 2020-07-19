import app from '../../../app'
import request from 'supertest'

describe('Update Exam Controller', () => {
  test('Should return 400 if no name is provided', async () => {
    const httpResponse = await request(app)
      .put('/exam/1')
      .send({
        type: 'valid_type',
        status: true
      })
    const response = httpResponse.body
    expect(httpResponse.statusCode).toBe(400)
    expect(response.body).toEqual({ name: 'Missing param: name' })
  })

  test('Should return 400 if no type is provided', async () => {
    const httpResponse = await request(app)
      .put('/exam/1')
      .send({
        name: 'valid_name',
        status: true
      })
    const response = httpResponse.body
    expect(httpResponse.statusCode).toBe(400)
    expect(response.body).toEqual({ name: 'Missing param: type' })
  })

  test('Should return 400 if no status is provided', async () => {
    const httpResponse = await request(app)
      .put('/exam/1')
      .send({
        name: 'exam',
        type: 'valid_type'
      })
    const response = httpResponse.body
    expect(httpResponse.statusCode).toBe(400)
    expect(response.body).toEqual({ name: 'Missing param: status' })
  })
})
