import { IReducer } from '../typescript/types'

const throwPopupReducer = (state = { message: '', state: '' }, action) => {
  switch (action.type) {
    case 'THROW_POPUP':
      return { ...state, ...action.payload }
    case 'CLEAR_POPUP':
      return (state = { message: '', state: '' })
    default:
      return state
  }
}

export { throwPopupReducer }
