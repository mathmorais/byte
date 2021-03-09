import { NextFunction, Request, Response } from 'express'
import { IPostCreatorRequestDTO } from './PostCreatorRequestDTO'

export class PostCreatorValidate {
  validateCredentials(req: Request, res: Response, next: NextFunction) {
    const { content, read_time, tags, title }: IPostCreatorRequestDTO = req.body

    if (content && read_time && tags && title) {
      return next()
    }

    return res.status(400).json({
      message: "Credentials can't be undefined",
    })
  }
}
