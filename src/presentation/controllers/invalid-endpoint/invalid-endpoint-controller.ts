import { serverError, invalidEndpoint } from '../../helpers/http-helper'
import { Request, Response } from 'express'

export class InvalidEndpointController {
  async handle (req: Request, res: Response): Promise<any> {
    try {
      await res.status(404).json(invalidEndpoint())
    } catch (error) {
      return res.status(500).json(serverError())
    }
  }
}
