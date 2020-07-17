import { response } from '../../../helpers/response-helper'
import { serverError, ok } from '../../../helpers/http-helper'
// import { MissingParamError } from '../../../errors'
import { ExamService } from '../../../services/exam/exam-service'
import { Request, Response } from 'express'

export class UpdateExamController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      const examService = new ExamService()
      // const requiredFields = ['name', 'address', 'status']
      // for (const field of requiredFields) {
      //   if (!req.body[field]) {
      //     return response(badRequest(new MissingParamError(field)))
      //   }
      // }
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
      return response(serverError())
    }
  }
}
