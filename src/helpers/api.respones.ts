import { Response} from 'express'

export class ApiResponses {

  private readonly res: Response

  constructor(res: Response) {
    this.res = res
  }

  _200 (body: { [key: string]: string }) {
    return this.res.status(200).json(body)
  }

  _400(message: string) {
    return this.res.status(400).json(message)
  }

}