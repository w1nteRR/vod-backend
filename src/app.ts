import express from 'express'
import mongoose from 'mongoose'

import router from './api/router'
import { config } from './database/config'

const app = express()

app.use(express.json())
app.use(router())

const PORT = process.env.PORT || 8080

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO, config)
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  } catch (err) {
    console.log(err)
  }
}

run()

