import app from '../../../app'
import request from 'supertest'

describe('ExamLaboratoryController', () => {
  test('Should return 400 if no exam_id is provided', async () => {
    const httpResponse = await request(app)
      .post('/laboratory/1/exam')
      .send({})
    const response = httpResponse.body
    expect(httpResponse.statusCode).toBe(400)
    expect(response.body).toEqual({ name: 'Missing param: exam_id' })
  })

  test('Should return 404 if no lab_id is provided', async () => {
    const httpResponse = await request(app)
      .post('/laboratory//exam')
      .send({
        exam_id: 1
      })
    const response = httpResponse.body
    expect(httpResponse.statusCode).toBe(404)
    expect(response.body).toEqual('Invalid method or endpoint')
  })
})
