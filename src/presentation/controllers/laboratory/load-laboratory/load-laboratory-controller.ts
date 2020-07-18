import { serverError, ok, notFound } from '../../../helpers/http-helper'
import { LaboratoryService } from '../../../services/laboratory/laborabory-service'
import { Request, Response } from 'express'

export class LoadLaboratoryController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      const laboratoryService = new LaboratoryService()
      const laboratories = await laboratoryService.all()
      if (!laboratories.length) {
        return res.status(404).json(notFound())
      }
      for (const laboratory of laboratories) {
        const available_exams: any = await laboratoryService.exams(laboratory.id)
        laboratory.available_exams = available_exams
      }
      await res.status(200).json(ok(laboratories))
    } catch (error) {
      return res.status(500).json(serverError())
    }
  }
}
