import { serverError, ok } from '../../../helpers/http-helper'
import { LaboratoryService } from '../../../services/laboratory/laborabory-service'
import { Request, Response } from 'express'
import { response } from '../../../helpers/response-helper'

export class LoadOneLaboratoryController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      const laboratoryService = new LaboratoryService()
      const { id } = req.params
      const laboratory = await laboratoryService.one(Number(id))

      await res.status(200).json(ok(laboratory))
    } catch (error) {
      return response(serverError())
    }
  }
}
