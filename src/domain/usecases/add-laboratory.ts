import { LaboratoryModel } from '../models/laboratory-model'

export interface AddLaboratoryModel {
  name: string
  address: string
  status: boolean
}

export interface AddLaboratory {
  add: (account: AddLaboratoryModel) => Promise<LaboratoryModel>
}
