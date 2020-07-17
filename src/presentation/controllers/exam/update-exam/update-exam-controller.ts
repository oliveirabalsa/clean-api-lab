import { serverError, ok, badRequest } from '../../../helpers/http-helper'
import { MissingParamError } from '../../../errors'
import { ExamService } from '../../../services/exam/exam-service'
import { Request, Response } from 'express'

export class UpdateExamController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      const examService = new ExamService()
      const requiredFields = ['name', 'type', 'status']
      for (const field of requiredFields) {
        if (!req.body[field]) {
          return res.status(400).json(badRequest(new MissingParamError(field)))
        }
      }
      const { name, type, status } = req.body
      const id = req.params.id

      const Exam = await examService.update({
        id,
        name,
        type,
        status
      })
      await res.status(200).json(ok(Exam))
    } catch (error) {
      return res.status(500).json(serverError())
    }
  }
}
