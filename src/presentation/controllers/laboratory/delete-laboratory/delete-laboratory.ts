import { serverError, noContent } from '../../../helpers/http-helper'
import { LaboratoryService } from '../../../services/laboratory/laborabory-service'
import { Request, Response } from 'express'
import { response } from '../../../helpers/response-helper'

export class DeleteLaboratoryController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      const laboratoryService = new LaboratoryService()
      const { id } = req.params
      await laboratoryService.delete(Number(id))

      await res.status(204).json(noContent())
    } catch (error) {
      return response(serverError())
    }
  }
}
