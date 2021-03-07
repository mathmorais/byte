import { User } from '@domain/entities/User'

export interface IFindUserRepository {
  find(query: object): Promise<User | null>
}
