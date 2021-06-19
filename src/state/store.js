import { combineReducers, createStore } from 'redux'

import { menuReducer } from "./menuReducer"
import { homeReducer } from "./homeReducer"
import { pacientsReducer } from './pacientsReducer'

let reducers = combineReducers({
	menu: menuReducer,
	home: homeReducer,
	pacients: pacientsReducer
})

let store = createStore(reducers)

export default store
