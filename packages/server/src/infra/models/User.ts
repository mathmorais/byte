import { Schema, model, Document } from 'mongoose'

interface IUserSchema {
  name: string
  email: string
  password: string
  email_verified?: boolean
}

export const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  email_verified: { type: Boolean, default: false },
})

const UserModel = model<IUserSchema & Document>('User', UserSchema)

export { UserModel }
