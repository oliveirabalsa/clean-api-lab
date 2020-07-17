import { response } from '../../../helpers/response-helper'
import { serverError, badRequest, ok } from '../../../helpers/http-helper'
import { MissingParamError } from '../../../errors'
import { ExamService } from '../../../services/exam/exam-service'
import { Request, Response } from 'express'

export class ExamController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      const examService = new ExamService()
      const requiredFields = ['name', 'type', 'status']
      for (const field of requiredFields) {
        if (!req.body[field]) {
          return response(badRequest(new MissingParamError(field)))
        }
      }
      const { name, type, status } = req.body
      const exam = await examService.save({
        name,
        type,
        status
      })

      await res.status(200).json(ok(exam))
    } catch (error) {
      // console.log(error.message)
      return response(serverError())
    }
  }
}
