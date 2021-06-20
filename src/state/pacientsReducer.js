import image from '../assets/user-pacient.jpg'

const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'
const CHANGE_BTN_FILTER = 'CHANGE_BTN_FILTER'
const SET_PACIENTS_LIST = 'SET_PACIENTS_LIST'

export const setSearchText = (text) => ({
	type: SET_SEARCH_TEXT,
	text: text
})

export const setActiveBtnFilter = (text) => ({
	type: CHANGE_BTN_FILTER,
	btnName: text
})

export const setPacientsList = (items) => ({
	type: SET_PACIENTS_LIST,
	items: items
})

let initialState = {
	searchFiledText: '',
	filter: {
		buttonActive: 'all'
	},
	pacientsList: [
		{
			userId: 1,
			snils: '123-456-789 00',
			userName: 'Иванов Иван',
			userImage: false,
			nextSurvey: '02.08.2021 13:00',
			disease: 'Гипертония',
			currentFeel: 'good',
			currentFeelText: 'Хорошее',
			pressure: '142 / 94'
		},
		{
			userId: '01234567802',
			userName: 'Рознев Владимир',
			userImage: false,
			nextSurvey: '03.08.2021 12:10',
			disease: 'Гипертония',
			currentFeel: 'normal',
			currentFeelText: 'Среднее',
			pressure: '142 / 94'
		},
		{
			userId: '012345678901',
			userName: 'Иванов Иван',
			userImage: image,
			nextSurvey: '02.08.2021 13:00',
			disease: 'Гипертония',
			currentFeel: 'bad',
			currentFeelText: 'Тяжелое',
			pressure: '142 / 94'
		},
		{
			userId: '012345678903',
			userName: 'Иванов Иван',
			userImage: image,
			nextSurvey: '02.08.2021 13:00',
			disease: 'Гипертония',
			currentFeel: 'normal',
			currentFeelText: 'Среднее',
			pressure: '142 / 94'
		},
		{
			userId: '012345678904',
			userName: 'Иванов Иван',
			userImage: image,
			nextSurvey: '02.08.2021 13:00',
			disease: 'Гипертония',
			currentFeel: 'good',
			currentFeelText: 'Хорошее',
			pressure: '142 / 94'
		},
		{
			userId: '012345678905',
			userName: 'Иванов Иван',
			userImage: image,
			nextSurvey: '02.08.2021 13:00',
			disease: 'Гипертония',
			currentFeel: 'good',
			currentFeelText: 'Хорошее',
			pressure: '142 / 94'
		},
		{
			userId: '012345678906',
			userName: 'Иванов Иван',
			userImage: image,
			nextSurvey: '02.08.2021 13:00',
			disease: 'Гипертония',
			currentFeel: 'good',
			currentFeelText: 'Хорошее',
			pressure: '142 / 94'
		}
	]
}

export const pacientsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SEARCH_TEXT:
			return {
				...state,
				searchFiledText: action.text
			}
		case CHANGE_BTN_FILTER:
			return {
				...state,
				filter: {
					buttonActive: action.btnName
				}
			}
		case SET_PACIENTS_LIST:
			return {
				...state,
				pacientsList: [...action.items]
			}
		default:
			return state
	}
}
