import { serverError, badRequest, ok } from '../../../helpers/http-helper'
import { MissingParamError, DataNotExistsError } from '../../../errors'
import { ExamLaboratoryService } from '../../../services/exam-laboratory/exam-laboratory-service'
import { Request, Response } from 'express'

export class ExamLaboratoryController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      const examLaboratoryService = new ExamLaboratoryService()
      const requiredFields = ['exam_id']
      for (const field of requiredFields) {
        if (!req.body[field]) {
          return res.status(400).send(badRequest(new MissingParamError(field)))
        }
      }
      const lab_id = Number(req.params.id)
      const { exam_id } = req.body

      if (!lab_id) {
        return res.status(400).send(badRequest(new MissingParamError('lab_id')))
      }

      const isValidExam = await examLaboratoryService.one(exam_id)

      if (!isValidExam || !isValidExam.length) {
        return res.status(400).send(badRequest(new DataNotExistsError(`exam_id: ${exam_id}`)))
      }

      await examLaboratoryService.save({
        lab_id,
        exam_id
      })

      const data = {
        success: {
          lab_id,
          exam_id
        }
      }
      await res.status(200).json(ok(data))
    } catch (error) {
      return res.status(500).json(serverError())
    }
  }
}
