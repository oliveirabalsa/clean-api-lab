import { serverError, noContent } from '../../../helpers/http-helper'
import { ExamLaboratoryService } from '../../../services/exam-laboratory/exam-laboratory-service'
import { Request, Response } from 'express'

export class DeleteExamLaboratoryController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      const examLaboratoryService = new ExamLaboratoryService()
      const { id } = req.params
      const payload = {
        lab_id: id,
        ...req.body
      }
      await examLaboratoryService.delete(payload)

      await res.status(204).json(noContent())
    } catch (error) {
      return res.status(500).json(serverError())
    }
  }
}
