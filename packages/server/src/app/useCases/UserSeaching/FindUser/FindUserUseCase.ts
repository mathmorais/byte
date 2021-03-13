import { IFindUserRepository } from '@app/repositories/UserSeaching/FindUser/FindUserRepository'
import { IFindUserDTO } from './FindUserDTO'

export class FindUserUseCase {
  constructor(private findUserByEmailRepository: IFindUserRepository) {}

  async handle({ query }: IFindUserDTO) {
    if (query) return await this.findUserByEmailRepository.find(query)
    throw new Error('Missing email property')
  }
}
