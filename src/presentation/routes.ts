import express from 'express'
import { LaboratoryController } from './controllers/laboratory/add-laboratoy/add-laboratory-controller'
import { LoadLaboratoryController } from './controllers/laboratory/load-laboratory/load-laboratory'

const routes = express()
const laboratoryController = new LaboratoryController()
const loadLaboratoryController = new LoadLaboratoryController()

routes.post('/laboratory', laboratoryController.handle)
routes.get('/laboratory', loadLaboratoryController.handle)

export default routes
