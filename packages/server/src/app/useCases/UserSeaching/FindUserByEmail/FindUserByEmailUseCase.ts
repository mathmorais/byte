import { FindUserByEmailRepository } from '@app/repositories/UserSeaching/FindUserByEmail/FindUserByEmailRepository'
import { IFindUserByEmailDTO } from './FindUserByEmailDTO'

export class FindUserByEmailUseCase {
  constructor(private findUserByEmailRepository: FindUserByEmailRepository) {}

  async handle({ email }: IFindUserByEmailDTO) {
    return await this.findUserByEmailRepository.findByEmail(email)
  }
}
