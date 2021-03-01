import { UserModel } from '@infra/models/User'
import { FindUserByEmailRepository } from './FindUserByEmailRepository'

export class FindUserByEmailImplementations
  implements FindUserByEmailRepository {
  async findByEmail(email: string) {
    return await UserModel.findOne({ email })
  }
}
