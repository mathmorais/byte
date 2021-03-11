import { ITokenVerifyRepository } from '@app/repositories/Token/TokenVerify/TokenVerifyRepository'
import { ITokenVerifyDTO } from './TokenVerifyDTO'

export class TokenVerifyUseCase {
  constructor(private tokenVerityRepository: ITokenVerifyRepository) {}

  handle({ token }: ITokenVerifyDTO) {
    if (token) return this.tokenVerityRepository.verify(token)

    throw new Error(
      `Token is not valid, maybe the functions does not receive arguments`
    )
  }
}
