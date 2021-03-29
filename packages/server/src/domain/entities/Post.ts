import { ObjectId } from 'mongoose'

export class Post {
  id?: string | ObjectId
  infos!: {
    title: string
    read_time: number
    thumbnail: string
    views: number
    creation_time: Date
  }
  content!: string
  tags!: string[]
  comments!: {
    username: string
    content: string
  }[]

  constructor(props: Omit<Post, 'id'>) {
    Object.assign(this, props)
  }
}
