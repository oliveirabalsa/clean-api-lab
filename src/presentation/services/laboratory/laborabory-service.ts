import connection from '../../../infra/db/connection'
import { LaboratoryModel } from '../../../domain/models/laboratory-model'
import { AddLaboratoryModel } from '../../../domain//usecases/add-laboratory'

export class LaboratoryService {
  async all (page?: number): Promise<any> {
    return await connection('laboratory')
      .limit(5)
      .offset((page - 1) * 5)
      .select('*')
  }

  async save (payload: LaboratoryModel): Promise<any> {
    return await connection('laboratory').insert(payload)
  }

  async update (payload: AddLaboratoryModel): Promise<any> {
    const { id } = payload
    return await connection('laboratory').where('id', id).update(payload)
  }

  async delete (id: number): Promise<any> {
    return await connection('laboratory').where('id', id).delete()
  }
}
