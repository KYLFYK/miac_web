import { Button, DatePicker, Select } from "antd"
import React from "react"

import styles from "../Pacients.module.scss"

const { RangePicker } = DatePicker
const { Option } = Select

const Filter = (props) => {
	let onChangeBtn = (text) => {
		props.setActiveBtnFilter(text)
	}
	
	return (
		<div className={styles.filter}>
			<div className={styles.filterBtns}>
				<Button onClick={() => onChangeBtn('all')} type={props.activeButtonFilter === 'all' ? "primary" : ''}>Все пациенты</Button>
				<Button onClick={() => onChangeBtn('clear')} type={props.activeButtonFilter === 'clear' ? "primary" : ''}>Отсутствуют рекомендации</Button>
				<Button onClick={() => onChangeBtn('soon')} type={props.activeButtonFilter === 'soon' ? "primary" : ''}>Прием в ближайшее время</Button>
			</div>
			<RangePicker placeholder={['Дата от', 'Дата до']} showTime />
			<Select
				mode="multiple"
				allowClear
				style={{ width: '300px' }}
				placeholder="Состояние"
				onChange={() => {}}
			>
				<Option value="hard">Тяжелое</Option>
				<Option value="good">Хорошее</Option>
				<Option value="normal">Среднее</Option>
			</Select>
		</div>
	)
}

export default Filter
