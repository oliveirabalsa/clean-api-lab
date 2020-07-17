import { serverError, ok, badRequest } from '../../../helpers/http-helper'
import { MissingParamError } from '../../../errors'
import { LaboratoryService } from '../../../services/laboratory/laborabory-service'
import { Request, Response } from 'express'

export class UpdateLaboratoryController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      const laboratoryService = new LaboratoryService()
      const requiredFields = ['name', 'address', 'status']
      for (const field of requiredFields) {
        if (!req.body[field]) {
          return res.status(400).json(badRequest(new MissingParamError(field)))
        }
      }
      const { name, address, status } = req.body
      const id = req.params.id

      const laboratory = await laboratoryService.update({
        id,
        name,
        address,
        status
      })
      await res.status(200).json(ok(laboratory))
    } catch (error) {
      return res.status(500).json(serverError())
    }
  }
}
