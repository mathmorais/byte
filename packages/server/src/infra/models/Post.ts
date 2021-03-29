import { Schema, model, Document, now } from 'mongoose'

export interface IPostSchema extends Document {
  infos: {
    title: string
    read_time: number
    views: number
    thumbnail: string
    creation_time?: Date
  }
  content: string
  tags: string[]
  comments: {
    username: string
    content: string
  }[]
}

const PostCommentSchema = new Schema({
  username: { type: String, required: true },
  content: { type: String, required: true },
})

const PostSchema = new Schema({
  infos: {
    title: { type: String, required: true },
    read_time: { type: Number, required: true },
    thumbnail: { type: String, required: false },
    views: { type: Number, default: 0 },
    creation_time: { type: Date, default: now() },
  },
  content: { type: String, required: true },
  tags: {
    type: [String],
    default: [],
  },
  comments: {
    default: [],
    type: [PostCommentSchema],
  },
})

const PostModel = model<IPostSchema>('Post', PostSchema)

export { PostModel }
