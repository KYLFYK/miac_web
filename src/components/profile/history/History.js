import styles from './History.module.scss'
import * as PropTypes from "prop-types"
import { Collapse, Statistic } from "antd"
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons"

const { Panel } = Collapse;

Panel.propTypes = {
	header: PropTypes.string,
	children: PropTypes.node
}
const History = () => {
	return (
		<div>
			<div className={styles.accord}>
				<Collapse defaultActiveKey={['1']}>
					<Panel header="Последние показания" key="1">
						<div className={styles.accordContent}>
							<Statistic
								title="Давление"
								value='140 / 82'
								precision={2}
								valueStyle={{ color: '#FF4D4F', fontSize: '14px' }}
								prefix={<CaretUpOutlined />}
								suffix=""
							/>
							<Statistic
								title="Пульс"
								value='110'
								precision={2}
								valueStyle={{ color: '#95DE64', fontSize: '14px' }}
								prefix={<CaretDownOutlined />}
								suffix=""
							/>
						</div>
					</Panel>
				</Collapse>
			</div>
		</div>
	)
}

export default History
