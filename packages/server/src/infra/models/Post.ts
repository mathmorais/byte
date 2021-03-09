import { Schema, model, Document, now } from 'mongoose'

interface IPostTagsSchema extends Document {
  tagname: string
}

interface IPostCommentSchema extends Document {
  user: string
  comment: string
}

interface IPostSchema extends Document {
  title: string
  content: string
  views: number
  read_time: number
  tags: IPostTagsSchema[]
  comments: IPostCommentSchema[] | []
  creation_time?: string
}

const PostCommentSchema = new Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true },
})

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  background: { type: String, required: false },
  views: { type: Number, required: true, default: 0 },
  read_time: { type: Number, required: true },
  tags: {
    type: [String],
    default: [],
  },
  comments: {
    default: [],
    type: [PostCommentSchema],
  },
  creation_time: { type: Date, default: now() },
})

const PostModel = model<IPostSchema>('Post', PostSchema)

export { PostModel }
