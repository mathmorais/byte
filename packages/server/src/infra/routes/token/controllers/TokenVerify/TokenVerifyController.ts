import { Request, Response } from 'express'
import { tokenVerifyUseCase } from '@app/useCases/Token/TokenVerify'

export class TokenVerifyController {
  verify = (req: Request, res: Response) => {
    const token = req.headers.authorization ?? ''

    try {
      const tokenBody = tokenVerifyUseCase.handle({ token })

      return res.status(200).json({
        message: tokenBody,
      })
    } catch (err) {
      return res.status(401).json({
        message: err.message,
      })
    }
  }
}
