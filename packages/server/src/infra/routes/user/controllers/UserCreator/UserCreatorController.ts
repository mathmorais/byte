import { NextFunction, Request, Response } from 'express'
import { createUserUseCase } from '@app/useCases/User/CreateUser'
import { IUserCreatorRequestDTO } from './UserCreatorRequestDTO'

export class UserCreatorController {
  async create(req: Request, res: Response, next: NextFunction) {
    const { name, email, password }: IUserCreatorRequestDTO = req.body

    try {
      await createUserUseCase.handle({
        name,
        email,
        password,
      })

      return next()
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      })
    }
  }
}
