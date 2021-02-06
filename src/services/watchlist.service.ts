import { Types } from 'mongoose'

import { aggregation } from '../database/watchlist.aggregation'
import Watchlist from '../database/watchlist.model'

export class WatchlistService {

  private readonly sub: string

  constructor(sub: string) {
    this.sub = sub
  }

  async addFilm (filmId: string) {
    await Watchlist.updateOne(
      {
        userId: this.sub
      }, 
      { 
        $push: { 
          watchlist: Types.ObjectId(filmId)
        } 
      }, 
      {
        upsert: true,
        setDefaultsOnInsert: true
      }
    )
  }

  async removeFilm (filmId: string) {
    await Watchlist.updateOne(
      { 
        userId: this.sub
      },
      {
        $pull: { watchlist: Types.ObjectId(filmId) }
      }
    )
  }

  async getWatchlistStatus (filmId: string) {
    return !!(await Watchlist.find(
      { 
        userId: this.sub,
        watchlist: {
          $elemMatch: {
            $in: Types.ObjectId(filmId)
          }
        } 
      }
    )).length
  }

  async getWatchlist () {
    let watchlist = (await Watchlist.aggregate(aggregation(this.sub)))[0].films
    
    watchlist.unshift({})

    return watchlist
  }

}