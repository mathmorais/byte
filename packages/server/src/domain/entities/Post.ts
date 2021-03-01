import { ObjectId } from 'mongoose'
import { Comment } from './Comment'

export class Post {
  readonly id!: string | ObjectId
  title!: string
  content!: string
  views!: number
  tags!: string[]
  comments!: Comment[]

  constructor(props: Omit<Post, 'id'>, id?: string) {
    Object.assign(this, props)

    if (id) {
      this.id = id
    }
  }
}
