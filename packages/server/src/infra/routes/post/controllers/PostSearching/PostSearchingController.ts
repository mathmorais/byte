import { findOnePostUseCase } from '@app/useCases/PostSeaching/FindOnePost'
import { findPostUseCase } from '@app/useCases/PostSeaching/FindPost'
import { Request, Response } from 'express'

export class PostSearchingController {
  async search(req: Request, res: Response) {
    const { page } = req.query

    const quantityPerPage = 15
    const currentPage = Number(page) - 1

    const offset = currentPage * quantityPerPage
    const query = {}

    try {
      const posts = await findPostUseCase.handle({ query, offset })
      res.status(200).json({
        message: posts,
      })
    } catch (err) {
      res.status(400).json({
        message: err.message,
      })
    }
  }

  async searchOne(req: Request, res: Response) {
    const { id } = req.params

    try {
      const post = await findOnePostUseCase.handle({ query: { _id: id } })
      res.status(200).json({
        message: post,
      })
    } catch (err) {
      res.status(400).json({
        message: err.message,
      })
    }
  }

  async searchFilter(req: Request, res: Response) {
    const { filter } = req.query
    const regex = new RegExp(`${filter}`, 'gi')

    try {
      let result = null

      const post = await findPostUseCase.handle({
        query: { 'infos.title': { $regex: regex } },
      })

      if (post.length <= 0) {
        result = await findPostUseCase.handle({
          query: { tags: { $regex: regex } },
        })
      } else {
        result = post
      }

      res.status(200).json({
        message: result,
      })
    } catch (err) {
      res.status(400).json({
        message: err.message,
      })
    }
  }
}
