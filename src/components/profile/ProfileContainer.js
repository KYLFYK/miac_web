import Profile from "./Profile"

import React from 'react'
import { connect } from 'react-redux'
import { selectMenu } from "../../state/profileReducer"

let mapStateToProps = (state) => {
	return {
		currentPage: state.profile.currentPage,
		userInfo: state.profile.user,
		userHealth: state.profile.health
	}
}

class ProfileAPI extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		this.props.selectMenu('info')
	}
	
	render() {
		return (
			<Profile { ...this.props } />
		)
	}
}

export default connect(mapStateToProps, {
	selectMenu
})(ProfileAPI)
