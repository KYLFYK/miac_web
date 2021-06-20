import { Form, Input, message, Select, Switch } from "antd"
import TextArea from "antd/es/input/TextArea"
import Modal from "antd/es/modal/Modal"
import React from "react"

const ModalReccomend = (props) => {
	const [confirmLoading, setConfirmLoading] = React.useState(false);
	const [modalText] = React.useState('');
	const [form] = Form.useForm();
	
	const handleOk = () => {
		setConfirmLoading(true);
		
		if (props.addRecommendation) {
			props.addRecommendation()
		}
		
		setTimeout(() => {
			props.setVisible(false);
			setConfirmLoading(false);
			message.success( 'Рекомендации добавлены' )
		}, 2000);
	};
	
	const handleCancel = () => {
		console.log('Clicked cancel button');
		props.setVisible(false);
	};
	
	const handleChangeTitle = (e) => {
		if (props.setRecFormTitle) {
			props.setRecFormTitle(e.target.value)
		}
	}
	
	const handleChangeComment = (e) => {
		if (props.setRecFormComment) {
			props.setRecFormComment(e.target.value)
		}
	}
	
	const handleChangeTag = (e) => {
		if (props.setRecFormTag) {
			props.setRecFormTag(e)
		}
	}
	
	return (
		<Modal okText="Добавить" cancelText="Закрыть"
		       centered title="Добавить рекомендацию" onOk={handleOk}
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
				<Form.Item required={true} label="Рекомендация">
					<Input value={props.recommendationsForm ? props.recommendationsForm.titleText : undefined} onChange={(e) => handleChangeTitle(e)} placeholder="Краткое описание" />
				</Form.Item>
				<Form.Item label="Комментарий">
					<TextArea value={props.recommendationsForm ? props.recommendationsForm.commentText : undefined} onChange={(e) => handleChangeComment(e)} rows={2} />
				</Form.Item>
				<Form.Item label="Метка">
					<Select value={props.recommendationsForm ? props.recommendationsForm.tagText : undefined} onChange={(e) => handleChangeTag(e)}>
						<Select.Option value="Важно">Важно</Select.Option>
						<Select.Option value="Рекомендуется">Рекомендуется</Select.Option>
						<Select.Option value="Крайне важно">Крайне важно</Select.Option>
					</Select>
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
