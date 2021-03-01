import { NextFunction, Request, Response } from 'express'
import { findUserByEmailUseCase } from '@app/useCases/UserSeaching/FindUserByEmail'
import { IUserCreatorRequestDTO } from './UserCreatorRequestDTO'

export class UserCreatorValidate {
  async validatePassword(req: Request, res: Response, next: NextFunction) {
    const { password }: IUserCreatorRequestDTO = req.body

    if (password.length >= 8) return next()

    return res.status(400).json({
      message: "Password can't be lower than 8 characters",
    })
  }
  async validateEmail(req: Request, res: Response, next: NextFunction) {
    const { email }: IUserCreatorRequestDTO = req.body

    const findedUser = await findUserByEmailUseCase.handle({ email })

    if (!findedUser) {
      return next()
    }

    res.status(400).json({
      message: 'Email already exist',
    })
  }
}
