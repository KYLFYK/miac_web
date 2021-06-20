import styles from './UserProfile.module.scss'

import {
	MessageOutlined,
	EditOutlined,
	CaretUpOutlined,
	QuestionCircleOutlined,
	PlusCircleOutlined,
	FileDoneOutlined,
	FormOutlined,
	UserDeleteOutlined
} from '@ant-design/icons'
import { Affix, Badge, Button, Descriptions, message, Popconfirm, Statistic } from 'antd'
import React from "react"

import ModalTest from "./modals/ModalTest"
import ModalReccomend from "./modals/ModalReccomend"
import ModalWrite from "./modals/ModalWrite"
import Avatar from "antd/es/avatar/avatar"

const Better = () => {
	return (
		<div>
			<span className={styles.better}>
				Улучшается
			</span>
			<CaretUpOutlined />
		</div>
	)
}

const UserProfile = (props) => {
	const warning = () => {
		message.warning('Реализация запланирована на будущее');
	};
	
	const [visibleTest, setVisibleTest] = React.useState(false);
	const [visibleReccomend, setVisibleReccomend] = React.useState(false);
	const [visibleWrite, setVisibleWrite] = React.useState(false);
	
	const showModalTest = () => {
		setVisibleTest(true);
	};
	
	const showModalRecommend = () => {
		setVisibleReccomend(true);
	}
	
	const showModalWrite = () => {
		setVisibleWrite(true);
	}
	
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.user}>
					<div className={styles.userImage}>
						{ props.userInfo.userImage ? (
							<img src={props.userInfo.userImage} alt="Фотография пользователя"/>
						) : (
							<Avatar style={{ backgroundColor: '#f56a00', width: '80px',
								height: '80px', lineHeight: '80px' }}>{props.userInfo.fio[0]}</Avatar>
						) }
						
						
					</div>
					<div className={styles.userInfo}>
						<span className={styles.name}>
							{ props.userInfo.fio }
						</span>
						<span className={styles.age}>
							{ props.userInfo.age }
						</span>
					</div>
					<div className={styles.links}>
						<div onClick={warning} className={styles.link}>
							<MessageOutlined className={styles.svg} />
						</div>
						<div onClick={warning} className={styles.link}>
							<EditOutlined className={styles.svg} />
						</div>
					</div>
				</div>
				<div className={styles.stats}>
					<Statistic
						title="Состояние"
						value={70.5}
						precision={2}
						valueStyle={{ color: '#95DE64', fontSize: '12px' }}
						prefix={ <Better /> }
						suffix="%"
					/>
				</div>
			</div>
			<div className={styles.table}>
				<Descriptions bordered layout="vertical">
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Снилс">{ props.userInfo.snils }</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Пол">{ props.userInfo.male }</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Крайний визит">{ props.userInfo.lastVizit }</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Дата рождения">{ props.userInfo.birhtDay }</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Рост">{ props.userInfo.height }</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Вес">{ props.userInfo.weight }</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Текущее состояние" span={3}>
						<Badge status="warning" text={ props.userInfo.currentFeeling === 'good' ? 'Нормальное' : 'Тяжелое' } />
					</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Вредные привычки">{ props.userInfo.badHabits ? props.userInfo.badHabits.join(', ') : 'Отсутсвуют' }</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Рекомендации">
						<span style={{ marginRight: '15px' }}>
							{ props.userInfo.recommendations ? props.userInfo.recommendations.join(', ') : 'Нет' }
						</span>
						<Button type='primary' onClick={showModalRecommend}>Добавить</Button>
					</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Жалобы">{ props.userInfo.complaints }</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Хронические заболевания">{ props.userInfo.chronic }</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Средний пульс">{ props.userInfo.averagePulse }</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Среднее давление">{ props.userInfo.averagePressure }</Descriptions.Item>
					{ props.userInfo.anamez.text.length ? (
						<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Анамез">
							<h4>
								{ props.userInfo.anamez.title }
							</h4>
							{ props.userInfo.anamez.text.map(text => {
								return (
									<p style={{ marginTop: '2px', marginBottom: '2px' }}>
										{ text }
									</p>
								)
							}) }
						</Descriptions.Item>
						) : null }
				</Descriptions>
			</div>
			<Affix offsetBottom={30}>
				<div className={styles.buttons}>
					<div className={styles.buttonsCol}>
						<Button type='primary' onClick={showModalTest} icon={<FormOutlined />}>
							Запросить показания
						</Button>
						<Button onClick={showModalRecommend} icon={<PlusCircleOutlined />}>
							Добавить рекомендацию
						</Button>
						<Button onClick={showModalWrite} icon={<FileDoneOutlined />}>
							Записать на приём
						</Button>
					</div>
					<div className={styles.buttonsCol}>
						<Popconfirm title="Вы уверены, что хотите удалить профиль пациента?"
						            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
						            cancelText="Отменить"
						            cancelButtonProps={{type: 'primary'}}
						            okText="Да, удалить"
						            okType={['danger']}
						>
							<Button type="primary" danger icon={<UserDeleteOutlined />}>
								Удалить пациента
							</Button>
						</Popconfirm>
					</div>
				</div>
			</Affix>
			<ModalTest setVisible={setVisibleTest} visible={visibleTest} />
			<ModalReccomend setVisible={setVisibleReccomend} visible={visibleReccomend} />
			<ModalWrite setVisible={setVisibleWrite} visible={visibleWrite} />
		</div>
	)
}

export default UserProfile
