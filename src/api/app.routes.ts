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
      return api._400(err.message)
    }
  })

  router.get('/status', decodeAccessToken, async (req: Request, res: Response) => {

    const { sub } = req.body
    const filmId = req.query.filmId as string

    const api = new ApiResponses(res)
    const service = new WatchlistService(sub)

    try {
      
      const status = await service.getWatchlistStatus(filmId)

      return api._200({ status })

    } catch (err) {
      return api._400(err.message)
    }
  })

  router.post('/add', decodeAccessToken, async (req: Request, res: Response) => {

    const { sub, filmId } = req.body

    const api = new ApiResponses(res)
    const service = new WatchlistService(sub)

    try {
      
      await service.addFilm(filmId)

      return api._200({ message: 'Success' })

    } catch (err) {
      return api._400(err.message)
    }
  })

  router.delete('/remove', decodeAccessToken, async (req: Request, res: Response) => {

    const { sub } = req.body
    const filmId = req.query.filmId as string

    const api = new ApiResponses(res)
    const service = new WatchlistService(sub)

    try {
      
      await service.removeFilm(filmId)

      return api._200({ message: 'Success' })

    } catch (err) {
      return api._400(err.message)
    }
  })
}