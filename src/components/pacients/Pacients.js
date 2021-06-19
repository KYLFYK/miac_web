import globalStyles from '../../global/App.module.scss'

import styles from './Pacients.module.scss'

import { NavLink } from "react-router-dom"
import { HomeOutlined } from "@ant-design/icons"
import React from "react"

const Pacients = () => {
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
		</>
	)
}

export default Pacients
