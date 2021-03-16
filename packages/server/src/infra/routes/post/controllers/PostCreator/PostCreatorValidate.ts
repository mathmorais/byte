import { tokenVerifyUseCase } from '@app/useCases/Token/TokenVerify'
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

  validateToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization ?? ''

    try {
      const tokenContent = <
        {
          admin: boolean
          uid: string
        }
      >tokenVerifyUseCase.handle({ token })

      if (tokenContent.admin) {
        return next()
      }

      throw new Error('Token is not authorized')
    } catch (err) {
      res.status(401).send({
        message: err.message,
      })
    }
  }
}
