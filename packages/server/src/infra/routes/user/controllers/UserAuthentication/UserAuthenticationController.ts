import { Request, Response } from 'express'
import { findUserUseCase } from '@app/useCases/UserSeaching/FindUser'
import { IUserAuthenticationRequestDTO } from './UserAuthenticationRequestDTO'
import { compare } from 'bcryptjs'
import { tokenSign } from '@infra/utils/tokenSign'

export class UserAuthenticationController {
  constructor() {
    this.authenticate.bind(this.compareCryptedPassword)
  }

  private async compareCryptedPassword(
    password: string,
    cryptedPassword: string
  ) {
    return await compare(password, cryptedPassword)
  }

  private createCookieTime = (dayCount: number) => {
    const time = new Date()
    const dayInSeconds = 1000 * 60 * 60 * 24
    const calculatedTime = time.getTime() + dayInSeconds * dayCount
    time.setTime(calculatedTime)

    return time
  }

  authenticate = async (req: Request, res: Response) => {
    const { email, password }: IUserAuthenticationRequestDTO = req.body
    const findedUser = await findUserUseCase.handle({ query: { email } })

    const result = await this.compareCryptedPassword(
      password,
      findedUser!.password
    )

    const token = tokenSign({
      id: findedUser!.id,
      admin: findedUser!.admin,
    })

    if (result && findedUser) {
      return res
        .cookie('auth_token', token, {
          expires: this.createCookieTime(30),
          httpOnly: false,
        })
        .status(200)
        .json({
          message: 'Authenticated',
        })
    }

    return res.status(401).json({
      message: 'Email or password is incorrect',
    })
  }
}
