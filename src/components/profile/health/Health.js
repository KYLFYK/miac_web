import styles from './Health.module.scss'

import { CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, LineChart, Tooltip, Line } from "recharts"
import { Alert, Button, message } from "antd"
import { DownloadOutlined, PrinterOutlined, FormOutlined } from "@ant-design/icons"
import React from "react"

import ModalTest from '../user-profile/modals/ModalTest'

const Health = () => {
	const [visibleTest, setVisibleTest] = React.useState(false);
	const [defaultActiveOption, setDefaultOption] =  React.useState('');
	
	const data1 = [
		{
			name: '01.06',
			['Диастолическое АД']: 92,
			['Систолическое АД']: 148,
			amt: 2400,
		},
		{
			name: '02.06',
			['Диастолическое АД']: 88,
			['Систолическое АД']: 141,
			amt: 2210,
		},
		{
			name: '03.06',
			['Диастолическое АД']: 81,
			['Систолическое АД']: 137,
			amt: 2290,
		},
		{
			name: '04.06',
			['Диастолическое АД']: 81,
			['Систолическое АД']: 132,
			amt: 2000,
		},
		{
			name: '05.06',
			['Диастолическое АД']: 74,
			['Систолическое АД']: 121,
			amt: 2181,
		},
		{
			name: '06.06',
			['Диастолическое АД']: 76,
			['Систолическое АД']: 127,
			amt: 2500,
		},
		{
			name: '07.06',
			['Диастолическое АД']: 85,
			['Систолическое АД']: 130,
			amt: 2100,
		},
	]
	
	const dataPulse = [
		{
			name: '01.06',
			['Пульс']: 128,
			amt: 2400,
		},
		{
			name: '02.06',
			['Пульс']: 121,
			amt: 2210,
		},
		{
			name: '03.06',
			['Пульс']: 117,
			amt: 2290,
		},
		{
			name: '04.06',
			['Пульс']: 112,
			amt: 2000,
		},
		{
			name: '05.06',
			['Пульс']: 101,
			amt: 2181,
		},
		{
			name: '06.06',
			['Пульс']: 107,
			amt: 2500,
		},
		{
			name: '07.06',
			['Пульс']: 110,
			amt: 2100,
		},
	]
	
	const warning = () => {
		message.warning('Реализация запланирована на будущее');
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
					<LineChart width="100%" height="100%" data={data1}>
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
					<LineChart width="100%" height="100%" data={dataPulse}>
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
