import { User } from '@domain/entities/User'
import { UserModel } from '@infra/models/User'

export interface ICreateUserRepository {
  create(credentials: User, model: typeof UserModel): Promise<void>
}
