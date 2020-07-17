import { LaboratoryModel } from '../models/laboratory-model'

export interface AddLaboratoryModel {
  id: string
  name: string
  address: string
  status: boolean
}

export interface AddLaboratory {
  add: (laboratory: AddLaboratoryModel) => Promise<LaboratoryModel>
}
