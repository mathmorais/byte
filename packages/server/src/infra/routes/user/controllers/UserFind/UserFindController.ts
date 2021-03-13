import { Request, Response } from 'express'
import { findUserUseCase } from '@app/useCases/UserSeaching/FindUser'
import { UserFindRequestDTO } from './UserFindRequestDTO'

export class UserFindController {
  async findById(req: Request, res: Response) {
    const { id } = (req.params as unknown) as UserFindRequestDTO

    try {
      const user = await findUserUseCase.handle({ query: { _id: id } })

      res.status(200).json({
        message: user,
      })
    } catch (err) {
      res.status(400).json({
        message: err.message,
      })
    }
  }
}
