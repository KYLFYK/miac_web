import styles from './Recommendations.module.scss'
import { Button, Card, Col, Popconfirm, Row, Tag } from "antd"

import ModalReccomend from '../user-profile/modals/ModalReccomend'
import { PlusCircleOutlined, DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons"
import React from "react"
import { addRecommendation, setRecFormComment, setRecFormTag, setRecFormTitle } from "../../../state/profileReducer"

const ExtraDelete = (props) => {
	return (
		<Popconfirm cancelText="Отменить" okText="Удалить" okButtonProps={{danger: true}} title="Удалить рекомендацию?" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
			<Button danger icon={<DeleteOutlined />} />
		</Popconfirm>
	)
}

const Recommendations = (props) => {
	const [visibleReccomend, setVisibleReccomend] = React.useState(false);
	
	const showModalRecommend = () => {
		setVisibleReccomend(true);
	}
	
	return (
		<div>
			<Button className={styles.addRecommend} onClick={showModalRecommend} type='primary' icon={<PlusCircleOutlined />}>
				Добавить рекомендацию
			</Button>
			<div className={styles.list}>
				{ props.recommendations.map(item => {
					return (
						<Card title={item.title} extra={<ExtraDelete />}>
							{ item.text.map(text => {
								return (
									<p>
										{ text }
									</p>
								)
							}) }
							{ item.tags.map(tag => {
								return (
									<Tag color={tag.color}>{ tag.text }</Tag>
								)
							}) }
						</Card>
					)
				}) }
				<ModalReccomend setRecFormTitle={props.setRecFormTitle}
				                setRecFormComment={props.setRecFormComment}
				                setRecFormTag={props.setRecFormTag}
				                setVisible={setVisibleReccomend}
				                visible={visibleReccomend}
				                addRecommendation={props.addRecommendation}
				                recommendationsForm={props.recommendationsForm}
				/>
			</div>
		</div>
	)
}

export default Recommendations
