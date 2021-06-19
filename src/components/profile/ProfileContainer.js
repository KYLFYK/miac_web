import Profile from "./Profile"

import { connect } from 'react-redux'
import { selectMenu } from "../../state/profileReducer"

let mapStateToProps = (state) => {
	return {
		currentPage: state.profile.currentPage
	}
}

export default connect(mapStateToProps, {
	selectMenu
})(Profile)
