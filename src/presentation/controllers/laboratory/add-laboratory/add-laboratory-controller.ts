import { serverError, badRequest, ok } from '../../../helpers/http-helper'
import { MissingParamError } from '../../../errors'
import { LaboratoryService } from '../../../services/laboratory/laborabory-service'
import { Request, Response } from 'express'

export class LaboratoryController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      const laboratoryService = new LaboratoryService()
      const requiredFields = ['name', 'address', 'status']
      for (const field of requiredFields) {
        req.body.status = String(req.body.status)
        if (!req.body[field]) {
          return res.status(400).json(badRequest(new MissingParamError(field)))
        }
      }
      const { name, address, status } = req.body
      await laboratoryService.save({
        name,
        address,
        status
      })
      const data = {
        success: {
          ...req.body
        }
      }
      await res.status(200).json(ok(data))
    } catch (error) {
      // console.log(error.message)
      return res.status(500).json(serverError())
    }
  }
}
