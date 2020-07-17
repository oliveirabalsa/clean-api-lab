import { Request, Response } from 'express'
import { HttpResponse } from '../protocols/http'

export const response = (data: HttpResponse): any =>
  async (req: Request, res: Response): Promise<any> => {
    const { statusCode, body } = data
    return res.status(statusCode).json(body)
  }
