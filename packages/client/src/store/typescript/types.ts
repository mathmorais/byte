export interface IAction {
  type: string
  payload?: any
}

export type IReducer<S> = (state?: S, action?: IAction) => S
