import { User } from '@domain/entities/User'

export interface FindUserByEmailRepository {
  findByEmail(email: string): Promise<User | null>
}
