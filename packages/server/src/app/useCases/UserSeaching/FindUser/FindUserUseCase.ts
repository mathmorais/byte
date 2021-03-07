import { IFindUserRepository } from '@app/repositories/UserSeaching/FindUser/FindUserRepository'
import { IFindUserByEmailDTO } from './FindUserDTO'

export class FindUserUseCase {
  constructor(private findUserByEmailRepository: IFindUserRepository) {}

  async handle({ query }: IFindUserByEmailDTO) {
    if (query) return await this.findUserByEmailRepository.find(query)
    throw new Error('Missing email property')
  }
}
