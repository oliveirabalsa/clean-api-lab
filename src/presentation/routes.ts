import express from 'express'
import { LaboratoryController } from './controllers/laboratory/add-laboratoy/add-laboratory-controller'
import { LoadLaboratoryController } from './controllers/laboratory/load-laboratory/load-laboratory'
import { DeleteLaboratoryController } from './controllers/laboratory/delete-laboratory/delete-laboratory'

const routes = express()
const laboratoryController = new LaboratoryController()
const loadLaboratoryController = new LoadLaboratoryController()
const deleteLaboratoryController = new DeleteLaboratoryController()

routes.post('/laboratory', laboratoryController.handle)
routes.get('/laboratory', loadLaboratoryController.handle)
routes.delete('/laboratory/:id', deleteLaboratoryController.handle)

export default routes
