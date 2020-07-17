import { serverError, ok, notFound } from '../../../helpers/http-helper'
import { ExamService } from '../../../services/exam/exam-service'
import { Request, Response } from 'express'

export class LoadExamController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      const examService = new ExamService()
      const exam = await examService.all()
      console.log(exam)
      if (!exam.length) {
        return res.status(404).json(notFound())
      }
      await res.status(200).json(ok(exam))
    } catch (error) {
      return res.status(500).json(serverError())
    }
  }
}
