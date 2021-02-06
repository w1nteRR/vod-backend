import { Router, Request, Response } from 'express'

import { ApiResponses } from '../helpers/api.respones'

const router = Router()

export default (app: Router) => {
  app.use('/', router)

  router.get('/', async (req: Request, res: Response) => {

    const api = new ApiResponses(res)

    try {

      return api._200({ message: 'Ok' })

    } catch (err) {
      console.log(err)

      return api._400(err.message)
    }
  })
}