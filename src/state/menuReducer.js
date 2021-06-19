import image from '../assts/user-image.jpg'

const SET_MENU_ITEM = 'SET_MENU_ITEM'

let initialState = {
	currentSelect: 'home',
	userName: 'Анастасия Иванова',
	userImage: image
}

export const selectMenu = (text) => ({
	type: SET_MENU_ITEM,
	selectedItem: text
})

export const menuReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MENU_ITEM:
			return {
				...state,
				currentSelect: action.selectedItem
			}
		default:
			return state
	}
}
