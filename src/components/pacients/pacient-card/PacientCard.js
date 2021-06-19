import User from '../../../global/user/User'

import { NavLink } from "react-router-dom"
import { UserOutlined, MessageOutlined, EditOutlined } from "@ant-design/icons"

import styles from '../Pacients.module.scss'

const PacientCard = (props) => {
	return (
		<div className={`${styles.pacient} ${props.currentFeel === 'bad' ? styles.mark : ''}`} key={props.userId}>
			<div className={styles.userContainer}>
				<User link={`/pacients/profile/${props.userId}`} imgUrl={props.userImage} name={props.userName} addText={props.userId}  />
			</div>
			<div className={styles.pacientKeys}>
				<div className={styles.pacientKey}>
					<span className={styles.keyTitle}>
						Следующий прием:
					</span>
					<span className={styles.keyValue}>
						{ props.nextSurvey }
					</span>
				</div>
				<div className={styles.pacientKey}>
					<span className={styles.keyTitle}>
						Крайние показатели давления
					</span>
					<span className={styles.keyValue}>
						{ props.pressure }
					</span>
				</div>
				<div className={styles.pacientKey}>
					<span className={styles.keyTitle}>
						Заболевание:
					</span>
					<span className={styles.keyValue}>
						{ props.disease }
					</span>
				</div>
				<div className={styles.pacientKey}>
					<span className={styles.keyTitle}>
						Состояние:
					</span>
					<span className={`${styles.keyValue} ${props.currentFeel === 'bad' ? styles.red : ''} ${props.currentFeel === 'normal' ? styles.orange : ''} ${props.currentFeel === 'good' ? styles.green : ''}`}>
						{ props.currentFeelText }
					</span>
				</div>
			</div>
			<div className={styles.links}>
				<NavLink className={styles.link} to={`/pacients/profile/${props.userId}`}>
					<UserOutlined className={styles.svg} />
				</NavLink>
				<NavLink className={styles.link} to={`/pacients/profile/${props.userId}`}>
					<MessageOutlined className={styles.svg} />
				</NavLink>
				<NavLink className={styles.link} to={`/pacients/profile/${props.userId}`}>
					<EditOutlined className={styles.svg} />
				</NavLink>
			</div>
		</div>
	)
}

export default PacientCard
