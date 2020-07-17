import connection from '../../../infra/db/connection'
import { LaboratoryModel } from '../../../domain/models/laboratory-model'
export class LaboratoryService {
  async all (page: number): Promise<any> {
    return await connection('laboratory')
      .limit(5)
      .offset((page - 1) * 5)
      .select('*')
  }

  async save (payload: LaboratoryModel): Promise<any> {
    return await connection('laboratory').insert(payload)
  }

  async one (id: number): Promise<any> {
    return await connection('laboratory').select('*').where('id', id)
  }

  async delete (id: number): Promise<any> {
    return await connection('laboratory').where('id', id).delete()
  }
}
