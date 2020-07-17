import express from 'express'
import {
  LaboratoryController,
  LoadLaboratoryController,
  DeleteLaboratoryController,
  UpdateLaboratoryController
} from './controllers/laboratory/index'

import { ExamController } from './controllers/exam/add-exam/add-exam-controller'
import { UpdateExamController } from './controllers/exam/update-exam/update-exam-controller'

const routes = express()

const laboratoryController = new LaboratoryController()
const loadLaboratoryController = new LoadLaboratoryController()
const deleteLaboratoryController = new DeleteLaboratoryController()
const updateLaboratoryController = new UpdateLaboratoryController()

const examController = new ExamController()
const updateExamController = new UpdateExamController()

routes.post('/laboratory', laboratoryController.handle)
routes.put('/laboratory/:id', updateLaboratoryController.handle)
routes.get('/laboratory', loadLaboratoryController.handle)
routes.delete('/laboratory/:id', deleteLaboratoryController.handle)

routes.post('/exam', examController.handle)
routes.put('/laboratory/:id', updateExamController.handle)
// routes.get('/laboratory', loadLaboratoryController.handle)
// routes.delete('/laboratory/:id', deleteLaboratoryController.handle)

export default routes
