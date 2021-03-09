export interface ICreatePostCredentials {
  title: string
  content: string
  tags: string[]
  read_time: number
  background: string
}

export interface ICreatePostRepository {
  create(credentials: ICreatePostCredentials): Promise<void>
}
