import { Router, Request, Response } from 'express'

import { ApiResponses } from '../helpers/api.responses'
import { SimilarService } from '../services/similar.service'

const router = Router()

export default (app: Router) => {
  app.use('/similar', router)

  router.post('/tags', async (req: Request, res: Response) => {    
    const { tags } = req.body

    const api = new ApiResponses(res)

    try {
      const films = await SimilarService.byTags(tags)

      return api._200({ films })
    } catch (err) {
      return api._400(err.message)
    }
  })
}