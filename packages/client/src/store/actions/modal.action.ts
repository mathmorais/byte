import { IAction } from '@store/typescript/types'
import { IInput } from '@components/Form'

interface IPayload {
  title: string
  description: string
  form: {
    inputs: IInput[]
  }
}

const throwModalAction = (payload: IPayload): IAction => {
  return {
    type: 'THROW_MODAL',
    payload,
  }
}

const clearModalAction = { type: 'CLEAR_MODAL' }

export { throwModalAction, clearModalAction }
