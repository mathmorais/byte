import { createPostUseCase } from '@app/useCases/Post/CreatePost'
import { Request, Response } from 'express'
import { IPostCreatorRequestDTO } from './PostCreatorRequestDTO'

export class PostCreatorController {
  create = async (req: Request, res: Response) => {
    const credentials: IPostCreatorRequestDTO = req.body

    try {
      await createPostUseCase.handle({
        ...credentials,
      })
      return res.status(201).json({
        message: 'Created',
      })
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      })
    }
  }
}
