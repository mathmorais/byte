import { User } from '@domain/entities/User'
import { ICreateUserRepository } from './CreateUserRepository'
import { UserModel } from '@infra/models/User'

export class CreateUserImplementations implements ICreateUserRepository {
  async create(props: User, model: typeof UserModel) {
    const userObject = Object.assign(props, model)
    await model.create(userObject)
  }
}
