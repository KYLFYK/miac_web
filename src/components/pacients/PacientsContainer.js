import { connect } from 'react-redux'

import Pacients from "./Pacients"

import { setActiveBtnFilter, setSearchText } from "../../state/pacientsReducer"

let mapStateToProps = (state) => {
	return {
		searchFiledText: state.pacients.searchFiledText,
		activeButtonFilter: state.pacients.filter.buttonActive,
		pacientsList: state.pacients.pacientsList
	}
}

export default connect(mapStateToProps, {
	setSearchText, setActiveBtnFilter
})(Pacients)
