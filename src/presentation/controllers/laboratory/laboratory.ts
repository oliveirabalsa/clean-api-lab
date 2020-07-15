import { HttpRequest, HttpResponse } from '../../protocols/http'
import { MissingParamError } from '../../errors'
import { serverError, badRequest } from '../../helpers/http-helper'

export class LaboratoryController {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name', 'address']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
    } catch (error) {
      return serverError()
    }
  }
}
