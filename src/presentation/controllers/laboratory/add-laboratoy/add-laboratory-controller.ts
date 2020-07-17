import { MissingParamError } from '../../../errors'
import { serverError, badRequest, ok } from '../../../helpers/http-helper'
import { LaboratoryService } from '../../../services/laboratory/laborabory-service'
import { Request, Response } from 'express'
import { response } from '../../../helpers/response-helper'

export class LaboratoryController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      const laboratoryService = new LaboratoryService()
      const requiredFields = ['name', 'address', 'status']
      for (const field of requiredFields) {
        if (!req.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, address, status } = req.body
      const laboratory = await laboratoryService.save({
        name,
        address,
        status
      })

      await res.status(200).json(ok(laboratory))
    } catch (error) {
      // console.log(error.message)
      return response(serverError())
    }
  }
}
