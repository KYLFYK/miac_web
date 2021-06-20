import User from '../../../global/user/User'

import { NavLink } from "react-router-dom"
import { UserOutlined, MessageOutlined, EditOutlined } from "@ant-design/icons"

import styles from '../Pacients.module.scss'
import { message } from "antd"

const PacientCard = (props) => {
	const warning = () => {
		message.warning('Реализация запланирована на будущее');
	};
	
	return (
		<div className={`${styles.pacient} ${props.currentFeel === 'bad' ? styles.mark : ''}`}>
			<div className={styles.userContainer}>
				<User link={`/pacients/profile/${props.id}`} imgUrl={props.userImage} name={`${props.firstName} ${props.lastName}`} addText={props.snils}  />
			</div>
			<div className={styles.pacientKeys}>
				<div className={styles.pacientKey}>
					<span className={styles.keyTitle}>
						Пол
					</span>
					<span className={styles.keyValue}>
						{ props.sex === 'male' ? ' Мужской' : 'Женский' }
					</span>
				</div>
				<div className={styles.pacientKey}>
					<span className={styles.keyTitle}>
						Возраст
					</span>
					<span className={styles.keyValue}>
						{ props.age }
					</span>
				</div>
				<div className={styles.pacientKey}>
					<span className={styles.keyTitle}>
						Рост:
					</span>
					<span className={styles.keyValue}>
						{ props.height }
					</span>
				</div>
				<div className={styles.pacientKey}>
					<span className={styles.keyTitle}>
						Рост:
					</span>
					<span className={styles.keyValue}>
						{ props.weight }
					</span>
				</div>
				<div className={styles.pacientKey}>
					<span className={styles.keyTitle}>
						Номер телефона:
					</span>
					<span className={styles.keyValue}>
						{ props.phone }
					</span>
				</div>
				<div className={styles.pacientKey}>
					<span className={styles.keyTitle}>
						Состояние:
					</span>
					<span className={`${styles.keyValue} ${props.currentStatus === 'Тяжелое' ? styles.red : ''} ${props.currentStatus === 'Нормальное' ? styles.orange : ''} ${props.currentStatus === 'Хорошее' ? styles.green : ''}`}>
						{ props.currentStatus }
					</span>
				</div>
			</div>
			<div className={styles.links}>
				<NavLink className={styles.link} to={`/pacients/profile/${props.userId}`}>
					<UserOutlined className={styles.svg} />
				</NavLink>
				<div className={styles.link} onClick={warning}>
					<MessageOutlined className={styles.svg} />
				</div>
				<div className={styles.link} onClick={warning}>
					<EditOutlined className={styles.svg} />
				</div>
			</div>
		</div>
	)
}

export default PacientCard
