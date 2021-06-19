import { connect } from 'react-redux'

import Pacients from "./Pacients"

import { setSearchText } from "../../state/pacientsReducer"

let mapStateToProps = (state) => {
	return {
		searchFiledText: state.pacients.searchFiledText
	}
}

export default connect(mapStateToProps, {
	setSearchText,
})(Pacients)
