import globalStyles from "../../global/App.module.scss"
import styles from "./Profile.module.scss"

import { NavLink, Route } from "react-router-dom"
import { HomeOutlined, UserOutlined, CalendarOutlined, UnorderedListOutlined, HistoryOutlined, LikeOutlined } from "@ant-design/icons"
import React from "react"
import { Menu } from "antd"

import CalendarPage from "./calendar/CalendarPage"
import History from "./history/History"
import UserProfileContainer from "./user-profile/UserProfileContainer"
import HealthContainer from "./health/HealthContainer"
import RecommendationsContainer from "./recommendations/RecommendationsContainer"

const Profile = (props) => {
	const handleClick = (text) => {
		props.selectMenu(text)
	}
	return (
		<div className={styles.wrapper}>
			<div className={globalStyles.crumbs}>
				<NavLink className={globalStyles.crumbItem} exact to="/miac_web_cite">
					<HomeOutlined size={16} />
					<span className={globalStyles.crumbText}>
						Главная
					</span>
				</NavLink>
				<span className={globalStyles.crumbSeparator}>
					/
				</span>
				<NavLink className={globalStyles.crumbItem} to="/miac_web_cite/pacients">
					<span className={globalStyles.crumbText}>
						Пациенты
					</span>
				</NavLink>
				<span className={globalStyles.crumbSeparator}>
					/
				</span>
				<NavLink className={globalStyles.crumbItem} to="/miac_web_cite/pacients/profile/012301248">
					<span className={globalStyles.crumbText}>
						{props.userInfo.fio}
					</span>
				</NavLink>
			</div>
			<div className={styles.tabs}>
				<Menu onClick={(e) => handleClick(e.key)} selectedKeys={props.currentPage} mode="horizontal">
					<Menu.Item key="info" icon={ <UserOutlined /> }>
						<NavLink to={`/miac_web_cite/pacients/profile/${props.userInfo.id}`}>
							Информация
						</NavLink>
					</Menu.Item>
					<Menu.Item key="calendar" icon={ <CalendarOutlined /> }>
						<NavLink to={`/miac_web_cite/pacients/profile/${props.userInfo.id}/calendar`}>
							Расписание
						</NavLink>
					</Menu.Item>
					<Menu.Item key="health" icon={ <UnorderedListOutlined /> }>
						<NavLink to={`/miac_web_cite/pacients/profile/${props.userInfo.id}/health`}>
							Показания
						</NavLink>
					</Menu.Item>
					<Menu.Item key="history" icon={ <HistoryOutlined />}>
						<NavLink to={`/miac_web_cite/pacients/profile/${props.userInfo.id}/history`}>
							История
						</NavLink>
					</Menu.Item>
					<Menu.Item key="recommendations" icon={ <LikeOutlined /> }>
						<NavLink to={`/miac_web_cite/pacients/profile/${props.userInfo.id}/recommendations`}>
							Рекомендации
						</NavLink>
					</Menu.Item>
				</Menu>
			</div>
			<div>
				<Route exact path={'/miac_web_cite/pacients/profile/:userId'} render={() => <UserProfileContainer userInfo={props.userInfo} />} />
				<Route exact path={'/miac_web_cite/pacients/profile/:userId/calendar'} render={() => <CalendarPage />} />
				<Route exact path={'/miac_web_cite/pacients/profile/:userId/health'} render={() => <HealthContainer userHealth={props.userHealth} />} />
				<Route exact path={'/miac_web_cite/pacients/profile/:userId/history'} render={() => <History />} />
				<Route exact path={'/miac_web_cite/pacients/profile/:userId/recommendations'} render={() => <RecommendationsContainer />} />
			</div>
		</div>
	)
}

export default Profile
