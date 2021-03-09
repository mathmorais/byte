export interface IAction {
  type: string
  payload?: any
}

export interface IReducer<S> {
  (state: S, action: IAction)
}
