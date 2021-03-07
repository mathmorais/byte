export interface IUpdateByIdProps {
  id: string
  query: object
}

export interface IUpdateUserByIdRepository {
  updateById(props: IUpdateByIdProps): Promise<void>
}
