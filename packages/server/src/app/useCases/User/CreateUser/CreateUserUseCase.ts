import { ICreateUserRepository } from '@app/repositories/User/CreateUser/CreateUserRepository'
import { CreateUserDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor(private createUserRepository: ICreateUserRepository) {}

  async handle(credentials: CreateUserDTO) {
    return await this.createUserRepository.create({ credentials })
  }
}
