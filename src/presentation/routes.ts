import express from 'express'
import { LaboratoryController } from './controllers/laboratory/add-laboratoy/add-laboratory-controller'
import { LoadLaboratoryController } from './controllers/laboratory/load-laboratory/load-laboratory'
import { DeleteLaboratoryController } from './controllers/laboratory/delete-laboratory/delete-laboratory'
import { LoadOneLaboratoryController } from './controllers/laboratory/load-one-laboratory/load-one-laboratory'

const routes = express()
const laboratoryController = new LaboratoryController()
const loadLaboratoryController = new LoadLaboratoryController()
const deleteLaboratoryController = new DeleteLaboratoryController()
const loadOneLaboratoryController = new LoadOneLaboratoryController()

routes.post('/laboratory', laboratoryController.handle)
routes.get('/laboratory', loadLaboratoryController.handle)
routes.delete('/laboratory/:id', deleteLaboratoryController.handle)
routes.get('/laboratory/:id', loadOneLaboratoryController.handle)

export default routes
