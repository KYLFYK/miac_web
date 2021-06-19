const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'

export const setSearchText = (text) => ({
	type: SET_SEARCH_TEXT,
	text: text
})

let initialState = {
	searchFiledText: ''
}

export const pacientsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SEARCH_TEXT:
			return {
				...state,
				searchFiledText: action.text
			}
		default:
			return state
	}
}
