import { HttpRequest, HttpResponse } from '../../protocols/http'
import { MissingParamError } from '../../errors'
import { serverError, badRequest, ok } from '../../helpers/http-helper'
import { LaboratoryService } from '../../services/laboratory/laborabory-service'

export class LaboratoryController {
  private readonly laboratoryService

  constructor (laboratoryService: LaboratoryService) {
    this.laboratoryService = laboratoryService
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

      const laboratory = await this.laboratoryService.save({
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
