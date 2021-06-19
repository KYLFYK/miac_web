import globalStyles from "../../global/App.module.scss"
import styles from "./Profile.module.scss"

import { NavLink, Route } from "react-router-dom"
import { HomeOutlined, UserOutlined, CalendarOutlined, UnorderedListOutlined, HistoryOutlined, LikeOutlined } from "@ant-design/icons"
import React from "react"
import { Menu } from "antd"

import UserProfile from "./user-profile/UserProfile"
import CalendarPage from "./calendar/CalendarPage"
import Health from "./health/Health"
import History from "./history/History"
import Recommendations from "./recommendations/Recommendations"

const Profile = (props) => {
	const handleClick = (text) => {
		props.selectMenu(text)
	}
	return (
		<div className={styles.wrapper}>
			<div className={globalStyles.crumbs}>
				<NavLink className={globalStyles.crumbItem} exact to="/">
					<HomeOutlined size={16} />
					<span className={globalStyles.crumbText}>
						Главная
					</span>
				</NavLink>
				<span className={globalStyles.crumbSeparator}>
					/
				</span>
				<NavLink className={globalStyles.crumbItem} to="/pacients">
					<span className={globalStyles.crumbText}>
						Пациенты
					</span>
				</NavLink>
				<span className={globalStyles.crumbSeparator}>
					/
				</span>
				<NavLink className={globalStyles.crumbItem} to="/pacients/profile/012301248">
					<span className={globalStyles.crumbText}>
						Иванов Иван
					</span>
				</NavLink>
			</div>
			<div className={styles.tabs}>
				<Menu onClick={(e) => handleClick(e.key)} selectedKeys={props.currentPage} mode="horizontal">
					<Menu.Item key="info" icon={ <UserOutlined /> }>
						<NavLink to={'/pacients/profile/0123456780'}>
							Информация
						</NavLink>
					</Menu.Item>
					<Menu.Item key="calendar" icon={ <CalendarOutlined /> }>
						<NavLink to={'/pacients/profile/0123456780/calendar'}>
							Расписание
						</NavLink>
					</Menu.Item>
					<Menu.Item key="health" icon={ <UnorderedListOutlined /> }>
						<NavLink to={'/pacients/profile/0123456780/health'}>
							Показания
						</NavLink>
					</Menu.Item>
					<Menu.Item key="history" icon={ <HistoryOutlined />}>
						<NavLink to={'/pacients/profile/0123456780/history'}>
							История
						</NavLink>
					</Menu.Item>
					<Menu.Item key="recommendations" icon={ <LikeOutlined /> }>
						<NavLink to={'/pacients/profile/0123456780/recommendations'}>
							Рекомендации
						</NavLink>
					</Menu.Item>
				</Menu>
			</div>
			<div>
				<Route exact path={'/pacients/profile/0123456780'} render={() => <UserProfile />} />
				<Route exact path={'/pacients/profile/0123456780/calendar'} render={() => <CalendarPage />} />
				<Route exact path={'/pacients/profile/0123456780/health'} render={() => <Health />} />
				<Route exact path={'/pacients/profile/0123456780/history'} render={() => <History />} />
				<Route exact path={'/pacients/profile/0123456780/recommendations'} render={() => <Recommendations />} />
			</div>
		</div>
	)
}

export default Profile
