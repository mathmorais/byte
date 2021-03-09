import { createStore, combineReducers } from 'redux'
import { throwPopupReducer } from './reducers/popup.reducer'

const reducers = {
  throwPopup: throwPopupReducer,
}

const combinedReducers = combineReducers(reducers)
const store = createStore(combinedReducers)

export { store, reducers }
