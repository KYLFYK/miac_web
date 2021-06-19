import styles from './UserProfile.module.scss'

import image from '../../../assets/user-image.jpg'

const UserProfile = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.user}>
					<div className={styles.userImage}>
						<img src={image} alt="Фотография пользователя"/>
					</div>
					<div>
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserProfile
