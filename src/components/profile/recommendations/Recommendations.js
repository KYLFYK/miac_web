import styles from './Recommendations.module.scss'
import { Button, Card, Col, Popconfirm, Row, Tag } from "antd"

import ModalReccomend from '../user-profile/modals/ModalReccomend'
import { PlusCircleOutlined, DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons"
import React from "react"

const ExtraDelete = () => {
	return (
		<Popconfirm cancelText="Отменить" okText="Удалить" okButtonProps={{danger: true}} title="Удалить рекомендацию?" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
			<Button danger icon={<DeleteOutlined />} />
		</Popconfirm>
	)
}

const Recommendations = () => {
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
				<Row gutter={16}>
					<Col span={8}>
						<Card title="Вносить показания" extra={<ExtraDelete />}>
							<p>
								Каждый день, утром и вечером замерять давление, пульс и вносить в приложение.
							</p>
							<p>
								Можете измерять после физической нагрузки и в состоянии покоя. Только обязательно указывайте в комментарии в каком состоянии были измерены показания.
							</p>
							<Tag color="#FF4D4F">Крайне важно</Tag>
						</Card>
					</Col>
					<Col span={8}>
						<Card title="Режим дня" extra={<ExtraDelete />}>
							<p>
								Рекомендуется соблюдать режим дня. Сон 7-8 часов в день.
							</p>
							<Tag color="#95DE64">Рекомендуется</Tag>
						</Card>
					</Col>
					<Col span={8}>
						<Card title="Принимать витамины" extra={<ExtraDelete />}>
							<p>
								Рекомендую приобрести витамины. Принимать регулярно.
							</p>
							<Tag color="#1890FF">Важно</Tag>
						</Card>
					</Col>
				</Row>
				<ModalReccomend setVisible={setVisibleReccomend} visible={visibleReccomend} />
			</div>
		</div>
	)
}

export default Recommendations
