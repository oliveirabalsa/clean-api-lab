import { LaboratoryController } from './laboratory'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new LaboratoryController()
    const httpRequest = {
      address: 'any_address',
      status: true
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
