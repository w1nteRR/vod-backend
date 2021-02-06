import express from 'express'

import router from './api/router'

const app = express()

app.use(router())

const run = () => app.listen(process.env.PORT || 8000, () => console.log(`Server is running`))

run()

