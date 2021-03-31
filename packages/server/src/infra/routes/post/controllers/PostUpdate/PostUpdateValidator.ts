import { tokenVerifyUseCase } from '@app/useCases/Token/TokenVerify'
import { NextFunction, Request, Response } from 'express'

export class PostUpdateValidator {
  validateToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization ?? ''

    try {
      tokenVerifyUseCase.handle({ token })
      next()
    } catch (err) {
      res.status(401).json({
        message: 'Unathorized token',
      })
    }
  }
}
