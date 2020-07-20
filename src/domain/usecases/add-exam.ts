import { ExamModel } from '../models/exam-model'

export interface AddExamModel {
  id: string
  name: string
  type: string
  status: boolean
}

export interface AddExam {
  git
  add: (Exam: AddExamModel) => Promise<ExamModel>
}
