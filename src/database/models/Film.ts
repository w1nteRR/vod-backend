import mongoose, { Schema, Document } from 'mongoose'

const FilmSchema: Schema = new Schema({})

export default mongoose.model<Document>('Film', FilmSchema)