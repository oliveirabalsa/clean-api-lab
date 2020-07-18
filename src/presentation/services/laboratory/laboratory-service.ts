import connection from '../../../infra/db/connection'
import { LaboratoryModel } from '../../../domain/models/laboratory-model'
import { AddLaboratoryModel } from '../../../domain/usecases/add-laboratory'

export class LaboratoryService {
  async all (page: number = 1): Promise<any> {
    return await connection('laboratory')
      .limit(10)
      .offset((page - 1) * 10)
      .where('status', '=', 'true')
      .orderBy('id')
      .select('*')
  }

  async one (id: number): Promise<any> {
    return await connection('laboratory').where('id', id).select('*')
  }

  async save (payload: LaboratoryModel): Promise<any> {
    return await connection('laboratory').insert(payload)
  }

  async update (payload: AddLaboratoryModel): Promise<any> {
    const { id, name, address, status } = payload
    return await connection('laboratory').where('id', id).update({ name, address, status })
  }

  async delete (id: number): Promise<any> {
    const status = 'false'
    return await connection('laboratory')
      .where('id', id)
      .update({ status })
  }

  async exams (id: number): Promise<any> {
    return await connection('exam')
      .join('labs_exams', 'exam.id', '=', 'labs_exams.exam_id')
      .where('labs_exams.lab_id', id)
      .select('*')
  }
}
