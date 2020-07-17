import { serverError, ok, notFound } from '../../../helpers/http-helper'
import { ExamService } from '../../../services/exam/exam-service'
import { Request, Response } from 'express'
import { response } from '../../../helpers/response-helper'

export class LoadExamController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      const examService = new ExamService()
      const exam = await examService.all()
      if (!exam.length) {
        return response(notFound())
      }
      await res.status(200).json(ok(exam))
    } catch (error) {
      return response(serverError())
    }
  }
}
