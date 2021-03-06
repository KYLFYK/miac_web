import React from "react"

import styles from './Home.module.scss'

import { ExclamationOutlined, UserOutlined, HomeOutlined } from "@ant-design/icons"

import User from '../../global/user/User'
import { Button, Carousel, Progress, Card } from "antd"
import { NavLink } from "react-router-dom"
import globalStyles from "../../global/App.module.scss"

const colors = {
	violet: '#9254DE',
	green: '#95DE64',
	red: '#F5222D'
}

const AlertWrapper = (props) => {
	if (props.haveAlerts) {
		return (
			<div className={styles.list}>
				{ props.alertUsers.map(item => {
					return (
						<div className={styles.alert} key={ item.userId }>
							<div className={styles.ico}>
								<ExclamationOutlined className={styles.svg} />
							</div>
							<p className={styles.alertText}>
								{ item.userAlertText }
							</p>
							<div className={styles.userContainer}>
								<User name={item.userName} addText={item.userId} imgUrl={item.userImage} link={`/pacients/profile/${item.userId}`} />
							</div>
							<div className={styles.info}>
								<div className={styles.infoItem}>
									<div>
										<span className={styles.red}>
											{ item.pressure[0] }
										</span>
										<span className={styles.separetor}>/</span>
										<span className={styles.red}>
											{ item.pressure[1] }
										</span>
									</div>
									<span className={styles.infoItemName}>
										Давление
									</span>
								</div>
								<div className={styles.infoItem}>
									<div>
										<span className={styles.red}>
											{ item.pulse }
										</span>
									</div>
									<span className={styles.infoItemName}>
										Пульс
									</span>
								</div>
							</div>
							<NavLink to={`/pacients/profile/${item.userId}`} className={styles.button}>
								<Button type='primary' icon={<UserOutlined />}>Перейти в профиль</Button>
							</NavLink>
						</div>
					)
				}) }
			</div>
		)
	} else {
		return null
	}
}

const Slider = (props) => {
	return (
		<>
			<Carousel dotPosition='top' autoplay={true}>
				{ props.todayList.map(item => {
					return (
						<div key={item.userId}>
							<div className={styles.slide}>
								<div className={styles.sliderImage}>
									<img src={item.userBigPhoto} alt=""/>
								</div>
								<div className={styles.content}>
									<div className={styles.contentText}>
										<div className={styles.contentTextItem}>
											<span className={styles.sliderName}>
												{ item.userName }
											</span>
											<span className={styles.sliderDate}>
												{ item.time }
											</span>
										</div>
										<div className={styles.contentTextItemFl}>
											<span className={styles.sliderName}>
												Снилс
											</span>
											<span className={styles.sliderDate}>
												{ item.userId }
											</span>
										</div>
										<div className={styles.contentTextItemFl}>
											<span className={styles.sliderName}>
												{ item.birthday }
											</span>
											<span className={styles.sliderDate}>
												{ item.age }
											</span>
										</div>
										<div className={styles.contentLinks}>
											<a href={`tel:${item.phoneLink}`} className={styles.sliderName}>
												{ item.phoneNumber }
											</a>
											<a href={`mailto:${item.email}`} className={styles.sliderName}>
												{ item.email }
											</a>
										</div>
									</div>
									<NavLink to={`/pacients/profile/${item.userId}`}>
										<Button type="primary" icon={<UserOutlined />}>
											Перейти
										</Button>
									</NavLink>
								</div>
								<div className={styles.anamez}>
									{ item.anamez }
								</div>
							</div>
						</div>
					)
				}) }
			</Carousel>
		</>
	);
};

const Home = (props) => {
	return (
		<>
			<div className={globalStyles.crumbs}>
				<NavLink className={globalStyles.crumbItem} exact to="/">
					<HomeOutlined size={16} />
					<span className={globalStyles.crumbText}>
						Главная
					</span>
				</NavLink>
			</div>
			<div className={styles.wrapper}>
				{ <AlertWrapper alertUsers={props.alertUsers} haveAlerts={props.haveAlert} /> }
				<div className={styles.widgets}>
					<div className={styles.widget}>
						<span className={styles.widgetTitle}>
							Ближайшие обследования
						</span>
						<div className={styles.slider}>
							<Slider todayList={props.todayList} />
						</div>
					</div>
					<div className={styles.widget}>
						<span className={styles.widgetTitle}>
							Состояние пациентов
						</span>
						<div className={styles.progress}>
							<div className={styles.bar}>
								<span className={styles.berText}>
									Общяя добросовестность
								</span>
								<Progress strokeColor={colors.violet} percent={props.stats.conscientiousness} status="active" />
							</div>
							<div className={styles.bar}>
								<span className={styles.berText}>
									Состояние стало лучше
								</span>
								<Progress strokeColor={colors.green} percent={props.stats.better} status="active" />
							</div>
							<div className={styles.bar}>
								<span className={styles.berText}>
									Состояние ухудшилось
								</span>
								<Progress strokeColor={colors.red} percent={props.stats.bad} status="active" />
							</div>
						</div>
					</div>
					<div className={styles.widget}>
						<span className={styles.widgetTitle}>
							Последние показания
						</span>
						<div className={styles.widgetCard}>
							<Card size="small" title={props.lastSurvey.userName} extra={<NavLink to={`/pacients/profile/${props.lastSurvey.userId}`}>Подробнее</NavLink>} style={{ width: 300 }}>
								<p className={styles.cardItem}>
									<span className={styles.cardText}>
										Пульс
									</span>
									<span className={`${styles.cardValue} ${styles.green}`}>
										{props.lastSurvey.pulse}
									</span>
								</p>
								<p className={styles.cardItem}>
									<span className={styles.cardText}>
										Давление
									</span>
									<span className={`${styles.cardValue} ${styles.dark}`}>
										{props.lastSurvey.pressure[0]}
										<span className={styles.cardsepareator}>
											/
										</span>
										{props.lastSurvey.pressure[1]}
									</span>
								</p>
								<p className={styles.cardItem}>
									<span className={styles.cardText}>
										Уровень стресса
									</span>
									<span className={`${styles.cardImage} ${styles.violet}`}>
									
									</span>
								</p>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
