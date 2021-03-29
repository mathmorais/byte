export interface IUpdateByIdProps {
  query: object
  id: string
}

export interface IUpdatePostRepository {
  updateById(props: IUpdateByIdProps): Promise<void>
}
