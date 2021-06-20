import styles from './UserProfile.module.scss'

import image from '../../../assets/user-pacient.jpg'

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

const UserProfile = () => {
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
						<img src={image} alt="Фотография пользователя"/>
					</div>
					<div className={styles.userInfo}>
						<span className={styles.name}>
							Рознев Виктор Олегович
						</span>
						<span className={styles.age}>
							34 года
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
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Снилс">123-456-789 01</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Пол">Мужской</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Крайний визит">12.06.2021</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Дата рождения">34.03.1987</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Рост">184</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Вес">83</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Текущее состояние" span={3}>
						<Badge status="warning" text="Нормальное" />
					</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Вредные привычки">Отсутсвуют</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Рекомендации">
						<span style={{ marginRight: '15px' }}>
							Нет
						</span>
						<Button type='primary' onClick={showModalRecommend}>Добавить</Button>
					</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Жалобы">Головные боли</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Хронические заболевания">Хроническое заболевание лёгких</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Средний пульс">82</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Среднее давление">123 / 84</Descriptions.Item>
					<Descriptions.Item labelStyle={{ fontWeight: 'bold' }} label="Анамез">
						<h4>
							Пример заголовка
						</h4>
						<p style={{ marginTop: '2px', marginBottom: '2px' }}>
							Пример текстового блока, тут можно описывать историю пациента.
						</p>
						<p style={{ marginTop: '2px', marginBottom: '2px' }}>
							Блок может быть любого размера
						</p>
					</Descriptions.Item>
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
