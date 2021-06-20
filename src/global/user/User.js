import styles from './User.module.scss'

import { NavLink } from "react-router-dom"
import Avatar from "antd/es/avatar/avatar"

const User = (props) => {
	return (
		<NavLink className={styles.user} to={props.link}>
			<div className={styles.image}>
				{props.imgUrl ? <img src={props.imgUrl} alt="Аватар пользователя"/> : <Avatar style={{ backgroundColor: '#f56a00', width: '40px',
					height: '40px', lineHeight: '40px' }}>{props.name[0]}</Avatar>}
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
