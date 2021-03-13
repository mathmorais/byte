import { throwPopupAction } from '@store/actions/popup.action'
import { Dispatch } from 'redux'

let isOnTimeout = false

export const throwPopupMessage = (
  message: string,
  state: 'warning' | 'success',
  dispatch: Dispatch
) => {
  if (!isOnTimeout) {
    isOnTimeout = true
    dispatch(throwPopupAction({ message, state }))

    return setTimeout(() => {
      isOnTimeout = false
    }, 2500)
  }
}
