import { ICreateUserRepository } from '@app/repositories/User/CreateUser/CreateUserRepository'
import { CreateUserDTO } from './CreateUserDTO'
import { UserModel } from '@infra/models/User'

export class CreateUserUseCase {
  constructor(private createUserRepository: ICreateUserRepository) {}

  async handle(props: CreateUserDTO) {
    try {
      await this.createUserRepository.create({ ...props }, UserModel)

      return 'Created'
    } catch (err) {
      return err.message
    }
  }
}
