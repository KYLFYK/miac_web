import { connect } from 'react-redux'

import Home from "./Home"

let mapStateToProps = (state) => {
	return {
		haveAlert: state.home.alert,
		alertUsers: state.home.alertUsers,
		todayList: state.home.today,
		stats: state.home.stats,
		lastSurvey: state.home.lastSurvey
	}
}

export default connect(mapStateToProps, {})(Home)
