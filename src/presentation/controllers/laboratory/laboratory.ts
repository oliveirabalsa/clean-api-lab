import { HttpRequest, HttpResponse } from '../../protocols/http'
import { MissingParamError } from '../../errors'
import { serverError, badRequest, ok } from '../../helpers/http-helper'
import { AddLaboratory } from '../../../domain/usecases/add-laboratory'

export class LaboratoryController {
  private readonly addLaboratory: AddLaboratory

  constructor (addLaboratory: AddLaboratory) {
    this.addLaboratory = addLaboratory
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name', 'address', 'status']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, address, status } = httpRequest.body

      const laboratory = await this.addLaboratory.add({
        name,
        address,
        status
      })
      return ok(laboratory)
    } catch (error) {
      return serverError()
    }
  }
}
