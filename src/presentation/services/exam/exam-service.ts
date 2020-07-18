import connection from '../../../infra/db/connection'
import { ExamModel } from '../../../domain/models/exam-model'
import { AddExamModel } from '../../../domain//usecases/add-exam'

export class ExamService {
  async all (page: number = 1): Promise<any> {
    return await connection('exam')
      .limit(10)
      .offset((page - 1) * 10)
      .where('status', '=', 'true')
      .orderBy('id')
      .select('*')
  }

  async one (id: number): Promise<any> {
    return await connection('exam').where('id', id).select('*')
  }

  async save (payload: ExamModel): Promise<any> {
    return await connection('exam').insert(payload)
  }

  async update (payload: AddExamModel): Promise<any> {
    const { id, name, type, status } = payload
    return await connection('exam').where('id', id).update({ name, type, status })
  }

  async delete (id: number): Promise<any> {
    const status = 'false'
    return await connection('exam')
      .where('id', id)
      .update({ status })
  }
}
