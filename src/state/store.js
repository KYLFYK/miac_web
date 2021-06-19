import { combineReducers, createStore } from 'redux'
import { menuReducer } from "./menuReducer"

let reducers = combineReducers({
	menu: menuReducer
})

let store = createStore(reducers)

export default store
