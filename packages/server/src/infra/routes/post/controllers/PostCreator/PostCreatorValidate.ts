import { NextFunction, Request, Response } from 'express'
import { IPostCreatorRequestDTO } from './PostCreatorRequestDTO'

export class PostCreatorValidate {
  validateCredentials(req: Request, res: Response, next: NextFunction) {
    const { infos, content }: IPostCreatorRequestDTO = req.body

    if (infos && content) {
      return next()
    }

    return res.status(400).json({
      message: "Credentials can't be undefined",
    })
  }
}
