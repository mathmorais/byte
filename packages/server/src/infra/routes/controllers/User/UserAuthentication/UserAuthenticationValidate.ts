import { NextFunction, Request, Response } from 'express'
import { findUserUseCase } from '@app/useCases/UserSeaching/FindUser'
import { IUserAuthenticationRequestDTO } from './UserAuthenticationRequestDTO'

export class UserAuthenticationValidate {
  async validateUserExist(req: Request, res: Response, next: NextFunction) {
    const { email }: IUserAuthenticationRequestDTO = req.body
    const findedUser = await findUserUseCase.handle({ query: { email } })
    const userExist = findedUser !== null

    if (userExist) return next()

    return res.status(401).json({
      message: 'Email or password are incorrect',
    })
  }
}
