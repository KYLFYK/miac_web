import styles from './Pacients.module.scss'

import { NavLink } from "react-router-dom"
import { HomeOutlined } from "@ant-design/icons"
import React from "react"

const Pacients = () => {
	return (
		<>
			<div className={styles.crumbs}>
				<NavLink exact to="/">
					<HomeOutlined size={16} />
				</NavLink>
			</div>
		</>
	)
}

export default Pacients
