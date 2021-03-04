import { Request, Response } from 'express'
import { findUserByEmailUseCase } from '@app/useCases/UserSeaching/FindUserByEmail'
import { IUserAuthenticationRequestDTO } from './UserAuthenticationRequestDTO'
import { compare } from 'bcryptjs'
import { ObjectId } from 'mongoose'

import { tokenSign } from '@infra/utils/tokenSign'

export class UserAuthenticatioController {
  constructor() {
    this.authenticate.bind(this.compareCryptedPassword)
  }

  private async compareCryptedPassword(
    password: string,
    cryptedPassword: string
  ) {
    return await compare(password, cryptedPassword)
  }

  authenticate = async (req: Request, res: Response) => {
    const { email, password }: IUserAuthenticationRequestDTO = req.body
    const findedUser = await findUserByEmailUseCase.handle({ email })

    const result = await this.compareCryptedPassword(
      password,
      findedUser!.password
    )

    if (result && findedUser) {
      return res.status(200).json({
        message: tokenSign({
          id: findedUser.id!,
          admin: findedUser.admin!,
        }),
      })
    }

    return res.status(401).json({
      message: 'Email or password is incorrect',
    })
  }
}
