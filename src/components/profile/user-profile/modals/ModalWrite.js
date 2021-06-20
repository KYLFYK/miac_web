import { DatePicker, Form, Input, message, Switch } from "antd"
import TextArea from "antd/es/input/TextArea"
import Modal from "antd/es/modal/Modal"
import React from "react"

const ModalWrite = (props) => {
	let [confirmLoading, setConfirmLoading] = React.useState(false);
	let [modalText, setModalText] = React.useState('');
	let [form] = Form.useForm();
	
	let handleOk = () => {
		setModalText('The modal will be closed after two seconds');
		setConfirmLoading(true);
		form.submit();
		
		setTimeout(() => {
			props.setVisible(false);
			message.success( 'Пациент записан на прием' )
			setConfirmLoading(false);
		}, 2000);
	};
	
	let handleCancel = () => {
		console.log('Clicked cancel button');
		props.setVisible(false);
	};
	
	return (
		<Modal okText="Записать на прием" cancelText="Закрыть"
		       centered title="Записать на прием" onOk={handleOk}
		       onCancel={handleCancel} confirmLoading={confirmLoading}
		       visible={props.visible}
		>
			<Form
				labelCol={{ span: 24 }}
				wrapperCol={{ span: 24 }}
				layout="vertical"
				size={'default'}
				style={{ maxHeight: '70vh', overflowY: 'auto' }}
				form={form}
			>
				<Form.Item required={true} label="Назначение">
					<Input placeholder="Краткое описание" />
				</Form.Item>
				<Form.Item label="Дата и время приема">
					<DatePicker showTime placeholder='Дата и время' />
				</Form.Item>
				<Form.Item label="Комментарий">
					<TextArea rows={2} />
				</Form.Item>
				<Form.Item label="Попросить связаться после получения">
					<Switch />
				</Form.Item>
				<p>{modalText}</p>
			</Form>
		</Modal>
	)
}

export default ModalWrite
