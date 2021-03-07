import { IUpdateUserByIdRepository } from '@app/repositories/User/UpdateUserById/UpdateUserByIdRepository'
import { IUpdateUserByIdDTO } from './UpdateUserByIdDTO'

export class UpdateUserByIdUseCase {
  constructor(private updateUserRepository: IUpdateUserByIdRepository) {}
  async handle({ id, query }: IUpdateUserByIdDTO) {
    if (id && query)
      return await this.updateUserRepository.updateById({ id, query })
    throw new Error('Missing id or query properties')
  }
}
