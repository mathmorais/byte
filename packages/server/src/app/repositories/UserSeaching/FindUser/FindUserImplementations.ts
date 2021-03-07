import { UserModel } from '@infra/models/User'
import { IFindUserRepository } from './FindUserRepository'

export class FindUserImplementations implements IFindUserRepository {
  async find(query: object) {
    return await UserModel.findOne({ ...query })
  }
}
