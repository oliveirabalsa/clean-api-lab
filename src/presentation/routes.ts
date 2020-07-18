import express from 'express'
import {
  LaboratoryController,
  LoadLaboratoryController,
  DeleteLaboratoryController,
  UpdateLaboratoryController
} from './controllers/laboratory/index'

import { ExamController } from './controllers/exam/add-exam/add-exam-controller'
import { UpdateExamController } from './controllers/exam/update-exam/update-exam-controller'
import { DeleteExamController } from './controllers/exam/delete-exam/delete-exam-controller'
import { LoadExamController } from './controllers/exam/load-exam/load-exam-controller'

import { ExamLaboratoryController } from './controllers/exam-laboratory/add-exam-laboratory/add-exam-laboratory-controller'
import { DeleteExamLaboratoryController } from './controllers/exam-laboratory/delete-exam-laboratory/delete-exam-laboratory'

import { InvalidEndpointController } from './controllers/invalid-endpoint/invalid-endpoint-controller'

const routes = express()

const laboratoryController = new LaboratoryController()
const loadLaboratoryController = new LoadLaboratoryController()
const deleteLaboratoryController = new DeleteLaboratoryController()
const updateLaboratoryController = new UpdateLaboratoryController()

const examController = new ExamController()
const loadExamController = new LoadExamController()
const deleteExamController = new DeleteExamController()
const updateExamController = new UpdateExamController()

const examLaboratoryController = new ExamLaboratoryController()
const deleteExamLaboratoryController = new DeleteExamLaboratoryController()

const invalidEndpointController = new InvalidEndpointController()

routes.post('/laboratory', laboratoryController.handle)
routes.put('/laboratory/:id', updateLaboratoryController.handle)
routes.get('/laboratory', loadLaboratoryController.handle)
routes.delete('/laboratory/:id', deleteLaboratoryController.handle)

routes.post('/exam', examController.handle)
routes.put('/exam/:id', updateExamController.handle)
routes.get('/exam', loadExamController.handle)
routes.delete('/exam/:id', deleteExamController.handle)

routes.post('/laboratory/:id/exam', examLaboratoryController.handle)
routes.delete('/laboratory/:id/exam', deleteExamLaboratoryController.handle)

const httpMethods: any = ['get', 'post', 'put', 'delete']
for (const httpMethod of httpMethods) {
  routes[httpMethod]('*', invalidEndpointController.handle)
}

export default routes
