import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { HomeOutlined } from "@ant-design/icons"

import globalStyles from '../../global/App.module.scss'
import styles from './Pacients.module.scss'

import Filter from "./filter/Filter"
import PacientCard from "./pacient-card/PacientCard"
import { Affix } from "antd"

const Pacients = (props) => {
	const [top] = useState(65);
	
	let onSearch = (e) => {
		props.setSearchText(e.target.value)
	}
	
	return (
		<div className={styles.pacientsPage}>
			<Affix offsetTop={top}>
				<div className={styles.white}>
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
					<Filter setActiveBtnFilter={props.setActiveBtnFilter} activeButtonFilter={props.activeButtonFilter} />
				</div>
			</Affix>
			<div className={styles.pacientsList}>
				{
					props.pacientsList.map(item => {
						return (
							<PacientCard key={item.userId} { ...item } />
						)
					})
				}
			</div>
		</div>
	)
}

export default Pacients
