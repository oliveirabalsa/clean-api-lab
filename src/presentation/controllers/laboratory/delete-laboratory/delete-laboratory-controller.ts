import { serverError, noContent } from '../../../helpers/http-helper'
import { LaboratoryService } from '../../../services/laboratory/laboratory-service'
import { Request, Response } from 'express'

export class DeleteLaboratoryController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      const laboratoryService = new LaboratoryService()
      const { id } = req.params
      await laboratoryService.delete(Number(id))

      await res.status(204).json(noContent())
    } catch (error) {
      return res.status(500).json(serverError())
    }
  }
}
