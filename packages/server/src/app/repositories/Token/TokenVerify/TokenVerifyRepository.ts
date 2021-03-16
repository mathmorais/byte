export interface ITokenVerifyRepository {
  verify(token: string): string | object
  formatToken(token: string): string
}
