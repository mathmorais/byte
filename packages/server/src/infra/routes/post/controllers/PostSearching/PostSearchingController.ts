import { findPostUseCase } from '@app/useCases/PostSeaching/FindPost'
import { Request, Response } from 'express'

export class PostSearchingController {
  async searchAll(req: Request, res: Response) {
    try {
      const posts = await findPostUseCase.handle({ query: {} })
      res.status(200).json({
        message: posts,
      })
    } catch (err) {
      res.status(400).json({
        message: err.message,
      })
    }
  }
}
