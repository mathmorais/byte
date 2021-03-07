import { ICreateUserRepository } from '@app/repositories/User/CreateUser/CreateUserRepository'
import { CreateUserDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor(private createUserRepository: ICreateUserRepository) {}

  async handle(credentials: CreateUserDTO) {
    if (credentials)
      return await this.createUserRepository.create({ credentials })
    throw new Error('Missing credentials properties')
  }
}
