import { ITokenVerifyRepository } from './TokenVerifyRepository'
import { config } from '@infra/config'
import { Token } from '@domain/entities/Token'
import jwt from 'jsonwebtoken'

export class TokenVerifyImplementations implements ITokenVerifyRepository {
  formatToken(token: string) {
    const tokenIndex = 1
    const formatedToken = token.split(' ')[tokenIndex]

    return formatedToken
  }

  verify(token: string) {
    const PUBLIC_KEY = config.jsonwebtoken.publicKey
    const CONFIG = config.jsonwebtoken.config
    const formatedToken = this.formatToken(token)

    if (PUBLIC_KEY && CONFIG) {
      return jwt.verify(formatedToken, PUBLIC_KEY, CONFIG)
    }

    throw new Error(
      `Arguments on verify is not valid, try check env variables.`
    )
  }
}
