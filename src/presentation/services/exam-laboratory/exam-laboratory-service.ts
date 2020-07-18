import connection from '../../../infra/db/connection'

export class ExamLaboratoryService {
  async save (payload: any): Promise<any> {
    return await connection('labs_exams').insert(payload)
  }

  async one (id: number): Promise<any> {
    return await connection('labs_exams').where('id', id).select('*')
  }

  async delete (payload: any): Promise<any> {
    const { lab_id, exam_id } = payload
    return await connection('labs_exams')
      .where('lab_id', lab_id)
      .where('exam_id', exam_id)
      .delete()
  }
}
