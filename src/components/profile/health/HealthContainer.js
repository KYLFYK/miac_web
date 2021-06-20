import Health from './Health'

import React from "react"
import { connect } from 'react-redux'
import axios from "axios"

let mapStateToProps = (state) => {
	return {
		averagePulse: state.profile.health.averagePulse,
		averagePressure: state.profile.health.averagePressure
	}
}

class HealthApi extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
	
	}
	
	render() {
		return (
			<Health { ...this.props } />
		)
	}
}

export default connect(mapStateToProps, {

})(HealthApi)
