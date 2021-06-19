import styles from './Menu.module.scss'

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
		</div>
	)
}

export default MenuList
