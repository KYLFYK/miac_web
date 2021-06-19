import { connect } from 'react-redux'

import Pacients from "./Pacients"
import { selectMenu } from "../../state/menuReducer"

let mapStateToProps = (state) => {
	return {
	
	}
}

export default connect(mapStateToProps, {
	selectMenu,
})(Pacients)
