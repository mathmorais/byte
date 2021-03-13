import { ObjectId } from 'mongoose'

export class Post {
  id?: string | ObjectId
  title!: string
  content!: string
  views!: number
  thumbnail!: string
  tags!: string[]
  comments!: {
    user: string
    comment: string
  }[]
  read_time!: number
  creation_time?: Date

  constructor(props: Omit<Post, 'id'>) {
    Object.assign(this, props)
  }
}
