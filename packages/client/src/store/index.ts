import { createStore, combineReducers } from 'redux'
import { throwModalReducer, MODAL_STATE } from './reducers/modal.reducer'
import { throwPopupReducer, POPUP_STATE } from './reducers/popup.reducer'

export type RootState = {
  throwModal: typeof MODAL_STATE
  throwPopup: typeof POPUP_STATE
}

const reducers = {
  throwModal: throwModalReducer,
  throwPopup: throwPopupReducer,
}

const combinedReducers = combineReducers(reducers)
const store = createStore(combinedReducers)

export { store, reducers }
