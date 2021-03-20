import { IReducer } from '../typescript/types'

const POPUP_STATE = {
  message: '',
  state: '',
}

const throwPopupReducer: IReducer<typeof POPUP_STATE> = (
  state = POPUP_STATE,
  action
) => {
  switch (action.type) {
    case 'THROW_POPUP':
      return { ...state, ...action.payload }
    case 'CLEAR_POPUP':
      return (state = { message: '', state: '' })
    default:
      return state
  }
}

export { throwPopupReducer, POPUP_STATE }
