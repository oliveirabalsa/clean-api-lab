import connection from '../../../infra/db/connection'
import { LaboratoryModel } from '../../../domain/models/laboratory-model'
import { AddLaboratoryModel } from '../../../domain//usecases/add-laboratory'

export class LaboratoryService {
  async all (page: number = 1): Promise<any> {
    return await connection('laboratory')
      .limit(15)
      .offset((page - 1) * 5)
      .select('*')
  }

  async save (payload: LaboratoryModel): Promise<any> {
    return await connection('laboratory').insert(payload)
  }

  async update (payload: AddLaboratoryModel): Promise<any> {
    const { id, name, address, status } = payload
    return await connection('laboratory').where('id', id).update({ name, address, status })
  }

  async delete (id: number): Promise<any> {
    return await connection('laboratory').where('id', id).delete()
  }
}
