import { updateUserByIdUseCase } from '@app/useCases/User/UpdateUserById'
import { Request, Response } from 'express'

export class UserVerifyController {
  async emailVerify(req: Request, res: Response) {
    const { id } = req.params

    try {
      await updateUserByIdUseCase.handle({
        id,
        query: { email_verified: true },
      })
      return res
        .cookie('verify_success', 'true')
        .redirect('http://localhost:3000/')
    } catch (err) {
      res.status(500).send('Unexpected error occurred')
    }
  }
}
