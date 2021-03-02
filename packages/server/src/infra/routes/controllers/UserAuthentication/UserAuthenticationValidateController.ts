import { NextFunction, Request, Response } from 'express'
import { findUserByEmailUseCase } from '@app/useCases/UserSeaching/FindUserByEmail'
import { IUserAuthenticationRequestDTO } from './UserAuthenticationRequestDTO'

export class UserAuthenticationValidateController {
  async validateUserExist(req: Request, res: Response, next: NextFunction) {
    const { email }: IUserAuthenticationRequestDTO = req.body
    const findedUser = await findUserByEmailUseCase.handle({ email })
    const userExist = findedUser !== null

    if (userExist) return next()

    return res.status(401).json({
      message: 'Email or password are incorrect',
    })
  }
}
