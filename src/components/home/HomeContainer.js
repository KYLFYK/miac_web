import { connect } from 'react-redux'

import Home from "./Home"
import { selectMenu } from "../../state/menuReducer"

let mapStateToProps = (state) => {
	return {
		haveAlert: state.home.alert,
		alertUsers: state.home.alertUsers,
		todayList: state.home.today,
		stats: state.home.stats,
		lastSurvey: state.home.lastSurvey
	}
}

export default connect(mapStateToProps, {
	selectMenu,
})(Home)
