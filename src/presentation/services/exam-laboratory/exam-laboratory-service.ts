import connection from '../../../infra/db/connection'

export class ExamLaboratoryService {
  async save (payload: any): Promise<any> {
    return await connection('labs_exams').insert(payload)
  }
}
