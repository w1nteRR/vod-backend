import { NextFunction, Request, Response } from "express"

import { ApiResponses } from '../helpers/api.responses'

export const decodeAccessToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-apigateway-api-userinfo'] as string
  const response = new ApiResponses(res)

  if(!token) return response._404('No token')

  const sub = JSON.parse(Buffer.from(token, 'base64').toString()).sub

  Object.assign(req.body = {}, { sub })

  next()
}