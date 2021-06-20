import styles from './Survey.module.scss'
import globalStyles from "../../global/App.module.scss"
import { NavLink } from "react-router-dom"
import { DeleteOutlined, HomeOutlined, QuestionCircleOutlined } from "@ant-design/icons"
import React from "react"
import { Button, Card, Popconfirm } from "antd"

const ExtraCard = () => {
	return (
		<Popconfirm cancelText="Отменить" okText="Удалить" okButtonProps={{danger: true}} title="Удалить рекомендацию?" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
			<Button danger icon={<DeleteOutlined />} />
		</Popconfirm>
	)
}

const Survey = () => {
	return (
		<div>
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
				<NavLink className={globalStyles.crumbItem} to="/miac_web_cite/survey">
					<span className={globalStyles.crumbText}>
						Приемы
					</span>
				</NavLink>
			</div>
			<div className={styles.list}>
				<Card title="Small size card" extra={<ExtraCard />}>
					<p>Card content</p>
					<p>Card content</p>
					<p>Card content</p>
				</Card>
			</div>
		</div>
	)
}

export default Survey
