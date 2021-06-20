import Recommendations from './Recommendations'

import { connect } from 'react-redux'
import React from "react"
import axios from "axios"
import { addRecommendation, setRecFormComment, setRecFormTag, setRecFormTitle } from "../../../state/profileReducer"

let mapStateToProps = (state) => {
	return {
		recommendations: state.profile.recommendations,
		recommendationsForm: state.profile.recommendationsForm
	}
}

class RecommendationsApi extends React.Component {
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
			<Recommendations { ...this.props } />
		)
	}
}

export default connect(mapStateToProps, {
	setRecFormTitle,
	setRecFormComment,
	setRecFormTag,
	addRecommendation
})(RecommendationsApi)
