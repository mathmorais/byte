import { Post } from '@domain/entities/Post'

export interface IFindPostRepository {
  find(query: object): Promise<Post[]>
  findOne(query: object): Promise<Post | null>
}
