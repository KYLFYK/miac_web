import React from "react"

import globalStyles from '../../global/App.module.scss'
import styles from './Pacients.module.scss'

import { NavLink } from "react-router-dom"
import { HomeOutlined } from "@ant-design/icons"
import { Button } from "antd"

const Pacients = (props) => {
	let onSearch = (e) => {
		props.setSearchText(e.target.value)
	}
	
	return (
		<>
			<div className={globalStyles.crumbs}>
				<NavLink className={globalStyles.crumbItem} exact to="/">
					<HomeOutlined size={16} />
					<span className={globalStyles.crumbText}>
						Главная
					</span>
				</NavLink>
				<span className={globalStyles.crumbSeparator}>
					/
				</span>
				<NavLink className={globalStyles.crumbItem} to="/pacients">
					<span className={globalStyles.crumbText}>
						Пациенты
					</span>
				</NavLink>
			</div>
			<div className={styles.searchField}>
				<input placeholder="Поиск" type="text" onChange={(e) => onSearch(e)} value={props.searchFiledText} />
			</div>
			<div className={styles.filter}>
				<div className={styles.filterBtns}>
					<Button type="primary">Все пациенты</Button>
					<Button>Тяжелое состояние</Button>
					<Button>Прием в ближайшее время</Button>
				</div>
			</div>
		</>
	)
}

export default Pacients
