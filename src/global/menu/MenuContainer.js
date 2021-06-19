import { connect } from 'react-redux'

import MenuList from "./MenuList"
import { selectMenu } from "../../state/menuReducer"

let mapStateToProps = (state) => {
	return {
		currentMenuItem: state.menu.currentSelect,
		userName: state.menu.userName,
		userImage: state.menu.userImage
	}
}

export default connect(mapStateToProps, {
	selectMenu,
})(MenuList)
