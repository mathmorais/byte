import { IAction } from '@store/typescript/types'

const throwPopupAction = (payload: {
  message: string
  state: 'warning' | 'success'
}): IAction => {
  return { type: 'THROW_POPUP', payload }
}

const clearPopupAction: IAction = { type: 'CLEAR_POPUP' }

export { throwPopupAction, clearPopupAction }
