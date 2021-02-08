import { Schema, Document, model, Types } from 'mongoose'

interface Film {
  _id: string
  img: string
  actorRole: string
}

interface IActor {
  userId: string
  films: Array<Film>
}

const ActorSchema: Schema = new Schema({
  actorName: {
    type: String,
    required: true,
    unique: true
  },
  films: {
    _id: { type: Types.ObjectId },
    img: { type: String },
    actorRole: { type: String }
  }
},
{
  timestamps: true
})

export default model<IActor & Document>('Actor', ActorSchema)