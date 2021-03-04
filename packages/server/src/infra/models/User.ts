import { Schema, model, Document } from 'mongoose'

interface IUserSchema extends Document {
  name: string
  email: string
  password: string
  email_verified?: boolean
}

export const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, minLength: 8, maxLength: 200 },
  email_verified: { type: Boolean, default: false },
  admin: { type: Boolean, default: false },
})

const UserModel = model<IUserSchema>('User', UserSchema)

export { UserModel }
