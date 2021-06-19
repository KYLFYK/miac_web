import image from '../assts/user-pacient.jpg'
import bigPhoto from '../assts/user-bg.jpg'

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
		stressLevel: '1'
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
			time: '11:30'
		},
		{
			userId: '0123456780',
			userName: 'Рознев Владимир',
			userBigPhoto: bigPhoto,
			time: '12:00'
		},
		{
			userId: '0123456781',
			userName: 'Плотников Илья',
			userBigPhoto: bigPhoto,
			time: '12:30'
		},
		{
			userId: '0123456782',
			userName: 'Чернов Алексей',
			userBigPhoto: bigPhoto,
			time: '13:00'
		}
	]
}

export const homeReducer = (state = initialState, action) => {
	switch (action.type) {
		
		default:
			return state
	}
}
