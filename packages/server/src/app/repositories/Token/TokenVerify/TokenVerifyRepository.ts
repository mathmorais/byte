import { Token } from '@domain/entities/Token'

export interface ITokenVerifyRepository {
  verify(token: string): void
  formatToken(token: string): string
}
