import { Router } from 'express'

import appRoutes from './app.routes'

export default () => {
  const app = Router()
		
  appRoutes(app)

  return app
}