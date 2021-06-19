import { combineReducers, createStore } from 'redux'

import { menuReducer } from "./menuReducer"
import { homeReducer } from "./homeReducer"
import { pacientsReducer } from './pacientsReducer'
import { profileReducer } from './profileReducer'

let reducers = combineReducers({
	menu: menuReducer,
	home: homeReducer,
	pacients: pacientsReducer,
	profile: profileReducer
})

let store = createStore(reducers)

export default store
