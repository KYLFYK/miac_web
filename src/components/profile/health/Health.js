import styles from './Health.module.scss'

import { CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, LineChart, Tooltip, Line } from "recharts"
import { Alert, Button, message } from "antd"
import { DownloadOutlined, PrinterOutlined, FormOutlined } from "@ant-design/icons"
import React from "react"

import ModalTest from '../user-profile/modals/ModalTest'

const Health = (props) => {
	const [visibleTest, setVisibleTest] = React.useState(false);
	const [defaultActiveOption, setDefaultOption] =  React.useState('');
	
	
	const warning = () => {
		message.warning('Реализация запланирована на будущее').then(() => {});
	};
	
	const showModalTest = (text) => {
		setDefaultOption(text)
		setVisibleTest(true);
	};
	
	return (
		<div className={styles.wrapper}>
			<div className={styles.chartWrapper}>
				<span className={styles.chartTitle}>
					<span className={styles.text}>
						Динамика изменения давления
					</span>
				</span>
				<ResponsiveContainer width="100%" height={300}>
					<LineChart width="100%" height="100%" data={props.averagePressure}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey={'Систолическое АД'} stroke="#1890FF" />
						<Line type="monotone" dataKey={'Диастолическое АД'} stroke="#120338" />
					</LineChart>
				</ResponsiveContainer>
				<div className={styles.chartBtns}>
					<Button onClick={() => showModalTest('pressure')} className={styles.mainBtn} type="primary" icon={<FormOutlined />}>
						Запросить показания
					</Button>
					<Button onClick={warning} icon={<DownloadOutlined />}>
						Загрузить PDF
					</Button>
					<Button onClick={warning} icon={<PrinterOutlined />}>
						Распечатать
					</Button>
				</div>
			</div>
			<div className={styles.chartWrapper}>
				<span className={styles.chartTitle}>
					<span className={styles.text}>
						Динамика изменения пульса
					</span>
					<Alert message="У пациента наблюдается повышенный пульс" type="error" />
				</span>
				<ResponsiveContainer width="100%" height={300}>
					<LineChart width="100%" height="100%" data={props.averagePulse}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey={'Пульс'} stroke="#FF4D4F" />
					</LineChart>
				</ResponsiveContainer>
				<div className={styles.chartBtns}>
					<Button onClick={() => showModalTest('pulse')} className={styles.mainBtn} type="primary" icon={<FormOutlined />}>
						Запросить показания
					</Button>
					<Button onClick={warning} icon={<DownloadOutlined />}>
						Загрузить PDF
					</Button>
					<Button onClick={warning} icon={<PrinterOutlined />}>
						Распечатать
					</Button>
				</div>
			</div>
			<ModalTest defaultActiveFirstOption={defaultActiveOption} setVisible={setVisibleTest} visible={visibleTest} />
		</div>
	)
}

export default Health
