const SET_MENU_ITEM = 'SET_MENU_ITEM'

let initialState = {
	currentPage: 'info'
}

export const selectMenu = (text) => ({
	type: SET_MENU_ITEM,
	selectedItem: text
})

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MENU_ITEM:
			return {
				...state,
				currentPage: action.selectedItem
			}
		default:
			return state
	}
}
