import UserProfile from './UserProfile'

import { connect } from 'react-redux'
import React from "react"
import axios from "axios"

let mapStateToProps = (state) => {
	return {
	
	}
}

class UserProfileApi extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		axios.get('http://77.222.52.193:3005/patients').then(response => {
			console.log(response.data)
			// this.props.setPacientsList(response.data.items)
		})
	}
	
	render() {
		return (
			<UserProfile { ...this.props } />
		)
	}
}

export default connect(mapStateToProps, {

})(UserProfileApi)
