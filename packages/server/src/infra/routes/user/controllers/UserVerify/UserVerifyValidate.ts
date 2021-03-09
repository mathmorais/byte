import { findUserUseCase } from '@app/useCases/UserSeaching/FindUser'
import { NextFunction, Request, Response } from 'express'

export class UserVerifyValidate {
  async validateUserExist(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params

    const user = await findUserUseCase.handle({
      query: { _id: id },
    })

    if (user) {
      if (user.email_verified) return res.redirect('http://localhost:3000')
      else return next()
    }

    res.cookie('verify_success', 'false').redirect('http://localhost:3000')
  }
}
