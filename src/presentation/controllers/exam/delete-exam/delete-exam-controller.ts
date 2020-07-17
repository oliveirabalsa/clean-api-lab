import { serverError, noContent } from '../../../helpers/http-helper'
import { ExamService } from '../../../services/exam/exam-service'
import { Request, Response } from 'express'
import { response } from '../../../helpers/response-helper'

export class DeleteExamController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      const examService = new ExamService()
      const { id } = req.params
      await examService.delete(Number(id))

      await res.status(204).json(noContent())
    } catch (error) {
      return response(serverError())
    }
  }
}
