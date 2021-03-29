import { updatePostByIdUseCase } from '@app/useCases/Post/UpdatePostById'
import { Request, Response } from 'express'

export class PostUpdateController {
  async updateViews(req: Request, res: Response) {
    const { id } = req.params
    const query = { $inc: { 'infos.views': 1 } }

    try {
      await updatePostByIdUseCase.handle({ id, query })

      res.status(200).json({
        message: 'Updated',
      })
    } catch (err) {
      res.status(400).json({
        message: err.message,
      })
    }
  }
  async updateComments(req: Request, res: Response) {
    const { id } = req.params
    const comementInfo: { name: string; content: string } = req.body
    const query = { $push: { comments: comementInfo } }

    try {
      await updatePostByIdUseCase.handle({ id, query })

      res.status(200).json({
        message: 'Updated',
      })
    } catch (err) {
      res.status(400).json({
        message: err.message,
      })
    }
  }
}
