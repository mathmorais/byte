import { ObjectId } from 'mongoose'

export class User {
  id?: string | ObjectId
  name!: string
  email!: string
  password!: string
  email_verified?: boolean
  admin?: boolean

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props)

    if (id) {
      this.id = id
    }
  }
}
