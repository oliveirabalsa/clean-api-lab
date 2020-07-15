import { LaboratoryController } from './laboratory'
import { MissingParamError } from '../../errors'

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
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 400 if no address is provided', async () => {
    const sut = new LaboratoryController()
    const httpRequest = {
      body: {
        name: 'any_name',
        status: true
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('address'))
  })
})
