import { LaboratoryController } from './laboratory'

describe('Laboratory Controller', () => {
  test('Should return 400 if no name is provided', async () => {
    const sut = new LaboratoryController()
    const httpRequest = {
      body: {
        address: 'any_address',
        status: true
      }
    }

    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
