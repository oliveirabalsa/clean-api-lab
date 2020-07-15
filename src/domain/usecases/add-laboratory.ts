import { LaboratoryModel } from '../models/laboratory-model'

export interface AddLaboratoryModel {
  name: string
  address: string
  status: boolean
}

export interface AddLaboratory {
  save: (account: AddLaboratoryModel) => Promise<LaboratoryModel>
}
