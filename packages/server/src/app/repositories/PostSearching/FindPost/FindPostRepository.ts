import { IPostSchema } from '@infra/models/Post'

export interface IFindPostRepository {
  find(query: object, offset: number): Promise<IPostSchema[]>
  findOne(query: object): Promise<IPostSchema | null>
}
