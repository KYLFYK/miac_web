import { connect } from 'react-redux'
import React from "react"

import Pacients from "./Pacients"

import { setActiveBtnFilter, setPacientsList, setSearchText } from "../../state/pacientsReducer"
import axios from "axios"

let mapStateToProps = (state) => {
	return {
		searchFiledText: state.pacients.searchFiledText,
		activeButtonFilter: state.pacients.filter.buttonActive,
		pacientsList: state.pacients.pacientsList
	}
}

class PatientsApi extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		axios.get('http://77.222.52.193:3005/patients').then(response => {
			console.log(response.data)
			this.props.setPacientsList(response.data.items)
		})
	}
	
	render() {
		return (
			<Pacients { ...this.props } />
		)
	}
}

export default connect(mapStateToProps, {
	setSearchText, setActiveBtnFilter, setPacientsList
})(PatientsApi)
