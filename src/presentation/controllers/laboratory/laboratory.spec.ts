import { LaboratoryController } from './laboratory'
import { MissingParamError } from '../../errors'
import { AddLaboratory, AddLaboratoryModel } from '../../../domain/usecases/add-laboratory'
import { LaboratoryModel } from '../../../domain/models/laboratory-model'

describe('Laboratory Controller', () => {
  const makeAddLaboratory = (): AddLaboratory => {
    class AddLaboratoryStub implements AddLaboratory {
      async add (laboratory: AddLaboratoryModel): Promise<LaboratoryModel> {
        const faceLaboratory = {
          id: 'valid_id',
          name: 'valid_name',
          address: 'valid_address',
          status: true
        }
        return await new Promise(resolve => resolve(faceLaboratory))
      }
    }
    return new AddLaboratoryStub()
  }

  interface SutTypes {
    sut: LaboratoryController
    addLaboratoryStub: AddLaboratory
  }

  const makeSut = (): SutTypes => {
    const addLaboratoryStub = makeAddLaboratory()
    const sut = new LaboratoryController(addLaboratoryStub)
    return {
      sut,
      addLaboratoryStub
    }
  }

  test('Should return 400 if no name is provided', async () => {
    const { sut } = makeSut()
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
    const { sut } = makeSut()
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

  test('Should return 400 if no status is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        address: 'any_address'
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('status'))
  })

  test('Should return 200 if valid data is provided', async () => {
    const { sut } = makeSut()
    const httpRequest = {
      body: {
        name: 'valid_name',
        address: 'valid_address',
        status: true
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(200)
    expect(httpResponse.body).toEqual({
      id: 'valid_id',
      name: 'valid_name',
      address: 'valid_address',
      status: true
    })
  })
})
