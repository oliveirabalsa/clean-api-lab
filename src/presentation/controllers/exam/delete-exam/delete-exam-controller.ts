import { serverError, noContent } from '../../../helpers/http-helper'
import { ExamService } from '../../../services/exam/exam-service'
import { Request, Response } from 'express'

export class DeleteExamController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      const examService = new ExamService()
      const { id } = req.params
      await examService.delete(Number(id))

      await res.status(204).json(noContent())
    } catch (error) {
      return res.status(500).json(serverError())
    }
  }
}
