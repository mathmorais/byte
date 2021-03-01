import { ICreateUserRepository, ICreateProps } from './CreateUserRepository'
import { UserModel } from '@infra/models/User'
import bcrypt from 'bcryptjs'

export class CreateUserImplementations implements ICreateUserRepository {
  cryptPassword(password: string) {
    return bcrypt.hashSync(password)
  }

  async create({ credentials }: ICreateProps) {
    const cryptedPassword = this.cryptPassword(credentials.password)
    credentials.password = cryptedPassword
    await UserModel.create({
      ...credentials,
    })
  }
}
