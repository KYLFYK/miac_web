import styles from './User.module.scss'

import { NavLink } from "react-router-dom"

const User = (props) => {
	return (
		<NavLink className={styles.user} to={props.link}>
			<div className={styles.image}>
				<img src={props.imgUrl} alt="Аватар пользователя"/>
			</div>
			<div className={styles.info}>
				<span className={styles.name}>
					{ props.name }
				</span>
				<span className={styles.text}>
					{ props.addText }
				</span>
			</div>
		</NavLink>
	)
}

export default User
