import express, { Request, Response } from 'express'

const routes = express()

routes.get('/', (req: Request, res: Response) => {
  return res.send('oi')
})

export default routes
