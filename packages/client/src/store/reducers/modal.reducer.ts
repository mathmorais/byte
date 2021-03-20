import { IReducer } from '../typescript/types'

const MODAL_STATE = {
  title: '',
  description: '',
  form: {
    inputs: [],
  },
}

const throwModalReducer: IReducer<typeof MODAL_STATE> = (
  state = MODAL_STATE,
  action
) => {
  switch (action.type) {
    case 'THROW_MODAL':
      return { ...state, ...action.payload }
    case 'CLEAR_MODAL':
      return (state = MODAL_STATE)
    default:
      return state
  }
}

export { throwModalReducer, MODAL_STATE }
