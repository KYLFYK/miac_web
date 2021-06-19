import styles from './Calendar.module.scss'

import { Calendar, Badge } from 'antd';

function getListData(value) {
	let listData;
	switch (value.date()) {
		case 8:
			listData = [
				{ type: 'warning', content: 'Важное событие' },
				{ type: 'success', content: 'Событие' },
			];
			break;
		case 10:
			listData = [
				{ type: 'warning', content: 'Важное событие' },
				{ type: 'success', content: 'Событие' },
				{ type: 'error', content: 'Обязательное событие' },
			];
			break;
		case 15:
			listData = [
				{ type: 'warning', content: 'Важное событие' },
				{ type: 'success', content: 'Событие' },
				{ type: 'error', content: 'Обязательное событие' },
				{ type: 'error', content: 'Обязательное событие' },
				{ type: 'error', content: 'Обязательное событие' },
				{ type: 'error', content: 'Обязательное событие' },
			];
			break;
		default:
	}
	return listData || [];
}

function dateCellRender(value) {
	const listData = getListData(value);
	return (
		<ul className="events">
			{listData.map(item => (
				<li key={item.content}>
					<Badge status={item.type} text={item.content} />
				</li>
			))}
		</ul>
	);
}

function getMonthData(value) {
	if (value.month() === 8) {
		return 1394;
	}
}

function monthCellRender(value) {
	const num = getMonthData(value);
	return num ? (
		<div className="notes-month">
			<section>{num}</section>
			<span>Событие</span>
		</div>
	) : null;
}

const CalendarPage = () => {
	return (
		<div className={styles.wrapper}>
			<Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
		</div>
	)
}

export default CalendarPage
