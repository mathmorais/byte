import { ObjectId } from 'mongoose'

export class Comment {
  readonly id!: string | ObjectId
  user!: string
  content!: string

  constructor(props: Omit<Comment, 'id'>, id?: string) {
    Object.assign(this, props)

    if (id) {
      this.id = id
    }
  }
}
