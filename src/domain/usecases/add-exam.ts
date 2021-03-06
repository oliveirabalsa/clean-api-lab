import { ExamModel } from '../models/exam-model'

export interface AddExamModel {
  id: string
  name: string
  type: string
  status: boolean
}

export interface AddExam {
  add: (Exam: AddExamModel) => Promise<ExamModel>
}
