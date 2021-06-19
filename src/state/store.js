import { combineReducers, createStore } from 'redux'
import { menuReducer } from "./menuReducer"
import { homeReducer } from "./homeReducer"

let reducers = combineReducers({
	menu: menuReducer,
	home: homeReducer
})

let store = createStore(reducers)

export default store
