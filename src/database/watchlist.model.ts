import { Schema, Document, model, Types } from 'mongoose'

interface IWatchlist {
  userId: string
  watchlist: Array<Types.ObjectId>
}

const WatchlistSchema: Schema = new Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  watchlist: {
    type: Array
  }
},
{
  timestamps: true
}
)

export default model<IWatchlist & Document>('Watchlist', WatchlistSchema)