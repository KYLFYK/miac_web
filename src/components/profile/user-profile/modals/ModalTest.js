import { DatePicker, Form, Select, Switch } from "antd"
import TextArea from "antd/es/input/TextArea"
import Modal from "antd/es/modal/Modal"
import React from "react"

const ModalTest = (props) => {
	let [confirmLoading, setConfirmLoading] = React.useState(false);
	let [modalText, setModalText] = React.useState('');
	let [form] = Form.useForm();
	
	let handleOk = () => {
		setModalText('The modal will be closed after two seconds');
		setConfirmLoading(true);
		
		setTimeout(() => {
			props.setVisible(false);
			setConfirmLoading(false);
		}, 2000);
	};
	
	let handleCancel = () => {
		console.log('Clicked cancel button');
		props.setVisible(false);
	};
	
	return (
		<Modal okText="Запросить" cancelText="Закрыть"
		       centered title="Запрос показаний" onOk={form.submit}
		       onCancel={handleCancel} confirmLoading={confirmLoading}
		       visible={props.visible} onFormFinish={handleOk}
		>
			<Form
				labelCol={{ span: 24 }}
				wrapperCol={{ span: 24 }}
				layout="vertical"
				size={'default'}
				style={{ maxHeight: '70vh', overflowY: 'auto' }}
				form={form}
			>
				<Form.Item required={true} label="Показания">
					<Select placeholder='Выберите' mode="multiple">
						<Select.Option value="pulse">Пульс</Select.Option>
						<Select.Option value="pressure">Давление</Select.Option>
						<Select.Option value="height">Рост</Select.Option>
						<Select.Option value="weight">Вес</Select.Option>
					</Select>
				</Form.Item>
				<Form.Item label="Комментарий">
					<TextArea rows={2} />
				</Form.Item>
				<Form.Item label="Крайний срок">
					<DatePicker showTime placeholder='Дата и время' />
				</Form.Item>
				<Form.Item label="Попросить связаться после отправки показаний">
					<Switch />
				</Form.Item>
				<p>{modalText}</p>
			</Form>
		</Modal>
	)
}

export default ModalTest
