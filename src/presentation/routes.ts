import express from 'express'
import { LaboratoryController } from './controllers/laboratory/add-laboratoy/add-laboratory-controller'

const routes = express()
const laboratoryController = new LaboratoryController()

routes.post('/laboratory', laboratoryController.handle)

export default routes
