import styles from './Menu.module.scss'
import { NavLink } from "react-router-dom"

const MenuList = (props) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.user}>
				<div className={styles.img}>
					<img src={props.userImage} alt=""/>
				</div>
				<span className={styles.userName}>
					{ props.userName }
				</span>
			</div>
			<div className={styles.menu}>
				<NavLink exact activeClassName={styles.active} className={styles.menuItem} to='/miac_web_cite'>
					<span>Главная</span>
					<div className={styles.notice}>
						3
					</div>
				</NavLink>
				<NavLink activeClassName={styles.active} className={styles.menuItem} to='/miac_web_cite/pacients'>
					<span>Пациенты</span>
				</NavLink>
				<NavLink activeClassName={styles.active} className={styles.menuItem} to='/miac_web_cite/survey'>
					<span>Приемы</span>
				</NavLink>
				{/*<NavLink activeClassName={styles.active} className={styles.menuItem} to='/settings'>*/}
				{/*	<span>Настройки</span>*/}
				{/*</NavLink>*/}
			</div>
		</div>
	)
}

export default MenuList
