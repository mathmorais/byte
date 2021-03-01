import { User } from '@domain/entities/User'

export interface ICreateProps {
  credentials: User
}

export interface ICreateUserRepository {
  create(props: ICreateProps): Promise<void>
  cryptPassword(string: string): string
}
