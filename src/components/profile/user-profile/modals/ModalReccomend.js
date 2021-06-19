import { Form, Input, Switch } from "antd"
import TextArea from "antd/es/input/TextArea"
import Modal from "antd/es/modal/Modal"
import React from "react"

const ModalReccomend = (props) => {
	const [confirmLoading, setConfirmLoading] = React.useState(false);
	const [modalText, setModalText] = React.useState('');
	const [form] = Form.useForm();
	
	const handleOk = () => {
		setModalText('The modal will be closed after two seconds');
		setConfirmLoading(true);
		
		setTimeout(() => {
			props.setVisible(false);
			setConfirmLoading(false);
		}, 2000);
	};
	
	const handleCancel = () => {
		console.log('Clicked cancel button');
		props.setVisible(false);
	};
	
	return (
		<Modal okText="Добавить" cancelText="Закрыть"
		       centered title="Добавить рекомендацию" onOk={form.submit}
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
				<Form.Item required={true} label="Рекомендация">
					<Input placeholder="Краткое описание" />
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

export default ModalReccomend
