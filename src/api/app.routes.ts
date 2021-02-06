import { Router, Request, Response } from 'express'

import { ApiResponses } from '../helpers/api.responses'
import { decodeAccessToken } from '../middlewares/token.middleware'
import { WatchlistService } from '../services/watchlist.service'

const router = Router()

export default (app: Router) => {
  app.use('/watchlist', router)

  router.get('/user', decodeAccessToken, async (req: Request, res: Response) => {

    const { sub } = req.body

    const api = new ApiResponses(res)
    const service = new WatchlistService(sub)

    try {
      
      const watchlist = await service.getWatchlist()

      return api._200(watchlist)

    } catch (err) {
      console.log(err)
      return api._400(err.message)
    }
  })
}