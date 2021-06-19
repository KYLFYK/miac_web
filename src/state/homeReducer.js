import image from '../assets/user-pacient.jpg'
import bigPhoto from '../assets/user-bg.jpg'

let initialState = {
	alert: true,
	alertUsers: [
		{
			userId: '0123456789',
			userName: 'Иванов Иван',
			userImage: image,
			userAlertText: 'У пациента наблюдается давление выше обычного',
			pressure: ['152', '91'],
			pulse: '98',
		},
		{
			userId: '0123456771',
			userName: 'Денис Федоров',
			userImage: image,
			userAlertText: 'У пациента наблюдается давление выше обычного',
			pressure: ['147', '89'],
			pulse: '113',
		},
		{
			userId: '0123456776',
			userName: 'Алексей Ткачев',
			userImage: image,
			userAlertText: 'У пациента наблюдается давление выше обычного',
			pressure: ['156', '102'],
			pulse: '118',
		}
	],
	lastSurvey: {
		userId: '0123456789',
		userName: 'Иванов Иван',
		pulse: '87',
		pressure: ['152', '91'],
		stressLevel: 'violet'
	},
	stats: {
		conscientiousness: 90,
		better: 70,
		bad: 5
	},
	today: [
		{
			userId: '0123456789',
			userName: 'Иванов Иван',
			userBigPhoto: bigPhoto,
			time: 'Прием в 11:30',
			anamez: 'Гипертония 1 степени',
			birthday: '12.05.1974',
			age: '47 лет',
			phoneNumber: '+7 (123) 456 78-90',
			phoneLink: '+791234567890',
			email: 'ivanov@mail.ru'
		},
		{
			userId: '0123456780',
			userName: 'Рознев Владимир',
			userBigPhoto: bigPhoto,
			time: 'Прием в 12:00',
			anamez: 'Гипертония 1 степени',
			birthday: '12.05.1974',
			age: '47 лет',
			phoneNumber: '+7 (123) 456 78-90',
			phoneLink: '+791234567890',
			email: 'roznev@mail.ru'
		},
		{
			userId: '0123456781',
			userName: 'Плотников Илья',
			userBigPhoto: bigPhoto,
			time: 'Прием в 12:30',
			anamez: 'Гипертония 1 степени',
			birthday: '12.05.1974',
			age: '47 лет',
			phoneNumber: '+7 (123) 456 78-90',
			phoneLink: '+791234567890',
			email: 'plotnikov@mail.ru'
		},
		{
			userId: '0123456782',
			userName: 'Чернов Алексей',
			userBigPhoto: bigPhoto,
			time: 'Прием в 13:00',
			anamez: 'Гипертония 1 степени',
			birthday: '12.05.1974',
			age: '47 лет',
			phoneNumber: '+7 (123) 456 78-90',
			phoneLink: '+791234567890',
			email: 'chernov@mail.ru'
		}
	]
}

export const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		
		default:
			return state
	}
}
