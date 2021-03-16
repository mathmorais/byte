export interface ICreatePostCredentials {
  infos: {
    title: string
    read_time: number
    thumbnail: string
  }
  content: string
  tags: string[]
}

export interface ICreatePostRepository {
  create(credentials: ICreatePostCredentials): Promise<void>
}
