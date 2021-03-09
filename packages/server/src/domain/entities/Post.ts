import { ObjectId } from 'mongoose'
import { Comment } from './Comment'

export class Post {
  readonly id!: string | ObjectId
  title!: string
  content!: string
  views!: number
  background!: string
  tags!: string[]
  comments!: Comment[]
  read_time!: number

  constructor(props: Omit<Post, 'id'>) {
    Object.assign(this, props)
  }
}
