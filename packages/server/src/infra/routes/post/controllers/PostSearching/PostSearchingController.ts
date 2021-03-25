import { findAndCountUseCase } from '@app/useCases/PostSeaching/FindAndCount'
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

  async searchAndCount(req: Request, res: Response) {
    const query = {}

    try {
      const count = await findAndCountUseCase.handle({ query })
      res.status(200).json({
        message: count,
      })
    } catch (err) {
      res.status(400).json({
        message: err.message,
      })
    }
  }

  async searchOne(req: Request, res: Response) {
    const { id } = req.query

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
      const post = await findPostUseCase.handle({
        query: { 'infos.title': { $regex: regex } },
      })

      res.status(200).json({
        message: post,
      })
    } catch (err) {
      res.status(400).json({
        message: err.message,
      })
    }
  }
}
