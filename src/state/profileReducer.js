const SET_MENU_ITEM = 'SET_MENU_ITEM'

const SET_RECOMMEND_FORM_TITLE = 'SET_RECOMMEND_FORM_TITLE'
const SET_RECOMMEND_FORM_COMMENT = 'SET_RECOMMEND_FORM_COMMENT'
const SET_RECOMMEND_FORM_TAG = 'SET_RECOMMEND_FORM_TAG'
const ADD_RECOMMENDATION = 'ADD_RECOMMENDATION'

let initialState = {
	currentPage: 'info',
	user: {
		id: 1,
		fio: 'Рознев Виктор Олегович',
		userImage: false, // false or string
		age: '45 лет',
		snils: '123-456-789 01',
		male: 'Мужской',
		lastVizit: '12.06.2021',
		birhtDay: '34.03.1987',
		height: '184',
		weight: '83',
		badHabits: false, // false or array
		recommendations: false, // false or array
		complaints: 'Головные боли',
		chronic: 'Хроническое заболевание лёгких',
		averagePulse: '82',
		averagePressure: '123 / 84',
		currentFeeling: 'good', // good - нормальное, инчае - тяжелое
		anamez: {
			title: 'Пример заголовка',
			text: [
				'Пример текстового блока, тут можно описывать историю пациента.',
				'Блок может быть любого размера'
			]
		}
	},
	health: {
		averagePressure: [
			{
				name: '01.06',
				['Диастолическое АД']: 92,
				['Систолическое АД']: 148,
				amt: 2400,
			},
			{
				name: '02.06',
				['Диастолическое АД']: 88,
				['Систолическое АД']: 141,
				amt: 2210,
			},
			{
				name: '03.06',
				['Диастолическое АД']: 81,
				['Систолическое АД']: 137,
				amt: 2290,
			},
			{
				name: '04.06',
				['Диастолическое АД']: 81,
				['Систолическое АД']: 132,
				amt: 2000,
			},
			{
				name: '05.06',
				['Диастолическое АД']: 74,
				['Систолическое АД']: 121,
				amt: 2181,
			},
			{
				name: '06.06',
				['Диастолическое АД']: 76,
				['Систолическое АД']: 127,
				amt: 2500,
			},
			{
				name: '07.06',
				['Диастолическое АД']: 85,
				['Систолическое АД']: 130,
				amt: 2100,
			}
		],
		averagePulse: [
			{
				name: '01.06',
				['Пульс']: 128,
				amt: 2400,
			},
			{
				name: '02.06',
				['Пульс']: 121,
				amt: 2210,
			},
			{
				name: '03.06',
				['Пульс']: 117,
				amt: 2290,
			},
			{
				name: '04.06',
				['Пульс']: 112,
				amt: 2000,
			},
			{
				name: '05.06',
				['Пульс']: 101,
				amt: 2181,
			},
			{
				name: '06.06',
				['Пульс']: 107,
				amt: 2500,
			},
			{
				name: '07.06',
				['Пульс']: 110,
				amt: 2100,
			}
		]
	},
	recommendations: [
		{
			id: '1',
			title: 'Вносить показания',
			text: [
				'Каждый день, утром и вечером замерять давление, пульс и вносить в приложение.',
				'Можете измерять после физической нагрузки и в состоянии покоя. Только обязательно указывайте в комментарии в каком состоянии были измерены показания.'
			],
			tags: [
				{
					color: '#FF4D4F',
					text: 'Крайне важно'
				}
			]
		},
		{
			id: '2',
			title: 'Режим дня',
			text: [
				'Рекомендуется соблюдать режим дня. Сон 7-8 часов в день.'
			],
			tags: [
				{
					color: '#95DE64',
					text: 'Рекомендуется'
				}
			]
		},
		{
			id: '3',
			title: 'Принимать витамины',
			text: [
				'Рекомендую приобрести витамины. Принимать регулярно.'
			],
			tags: [
				{
					color: '#1890FF',
					text: 'Важно'
				}
			]
		}
	],
	recommendationsForm: {
		titleText: '',
		commentText: '',
		tagText: '',
	}
}

export const selectMenu = (text) => ({
	type: SET_MENU_ITEM,
	selectedItem: text
})

export const setRecFormTitle = (text) => ({
	type: SET_RECOMMEND_FORM_TITLE,
	text: text
})

export const setRecFormComment = (text) => ({
	type: SET_RECOMMEND_FORM_COMMENT,
	text: text
})

export const setRecFormTag = (text) => ({
	type: SET_RECOMMEND_FORM_TAG,
	text: text
})

export const addRecommendation = () => ({
	type: ADD_RECOMMENDATION
})

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MENU_ITEM:
			return {
				...state,
				currentPage: action.selectedItem
			}
		case SET_RECOMMEND_FORM_TITLE:
			return {
				...state,
				recommendationsForm: {
					...state.recommendationsForm,
					titleText: action.text
				}
			}
		case SET_RECOMMEND_FORM_COMMENT:
			return {
				...state,
				recommendationsForm: {
					...state.recommendationsForm,
					commentText: action.text
				}
			}
		case SET_RECOMMEND_FORM_TAG:
			return {
				...state,
				recommendationsForm: {
					...state.recommendationsForm,
					tagText: action.text
				}
			}
		case ADD_RECOMMENDATION:
			let color
			
			switch (state.recommendationsForm.tagText) {
				case 'Крайне важно':
					color = '#FF4D4F'
					break
				case 'Рекомендуется':
					color = '#95DE64'
					break
				default:
					color = '#1890FF'
			}
			
			return {
				...state,
				recommendations: [
					{
						id: state.recommendations.length + 1,
						title: state.recommendationsForm.titleText,
						text: [state.recommendationsForm.commentText],
						tags: [
							{
								color: color,
								text: state.recommendationsForm.tagText
							}
						]
					},
					...state.recommendations
				],
				recommendationsForm: {
					titleText: '',
					commentText: '',
					tagText: '',
				}
			}
		default:
			return state
	}
}
