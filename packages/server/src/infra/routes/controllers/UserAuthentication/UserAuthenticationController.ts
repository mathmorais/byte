import { Request, Response } from 'express'
import { findUserByEmailUseCase } from '@app/useCases/UserSeaching/FindUserByEmail'
import { IUserAuthenticationRequestDTO } from './UserAuthenticationRequestDTO'
import { compare } from 'bcryptjs'
import { ObjectId } from 'mongoose'
import jwt from 'jsonwebtoken'
import { config } from '@infra/config'

interface ITokenProps {
  id: string | ObjectId
}

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

  private async signLoginToken({ id }: ITokenProps) {
    if (config.jsonwebtoken.privateKey) {
      return jwt.sign(
        {
          id,
        },
        config.jsonwebtoken.privateKey!
      )
    }

    throw new Error("Private key from jwt can't undefined")
  }

  authenticate = async (req: Request, res: Response) => {
    const { email, password }: IUserAuthenticationRequestDTO = req.body
    const findedUser = await findUserByEmailUseCase.handle({ email })

    const result = await this.compareCryptedPassword(
      password,
      findedUser!.password
    )

    if (result) {
      return res.status(200).json({
        message: this.signLoginToken({ id: findedUser!.id! }),
      })
    }

    res.status(401).json({
      message: 'Email or password is incorrect',
    })
  }
}
