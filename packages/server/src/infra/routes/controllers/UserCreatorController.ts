import { Request, Response } from 'express'
import { createUserUseCase } from '@app/useCases/User/CreateUser'
import { IUserCreatorRequestDTO } from './UserCreatorRequestDTO'

export class UserCreator {
  async create(req: Request, res: Response) {
    const { name, email, password }: IUserCreatorRequestDTO = req.body

    try {
      await createUserUseCase.handle({
        name,
        email,
        password,
      })

      res.status(201).json({
        message: 'Created',
      })
    } catch (err) {
      res.status(500).json({
        message: err.message,
      })
    }
  }
}
