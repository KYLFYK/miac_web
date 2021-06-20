import styles from './App.module.scss';
import 'antd/dist/antd.css';

import { BrowserRouter, Route } from 'react-router-dom'

import MenuContainer from "./menu/MenuContainer"
import HomeContainer from "../components/home/HomeContainer"
import PacientsContainer from "../components/pacients/PacientsContainer"
import ProfileContainer from "../components/profile/ProfileContainer"
import SurveyContainer from "../components/survey/SurveyContainer"

function App() {
  return (
      <BrowserRouter>
        <div className={styles.app}>
            <aside className={styles.aside}>
                <MenuContainer />
            </aside>
            <div className={styles.content}>
                <Route exact path={['/home', '/']} render={() => <HomeContainer />} />
                <Route exact path={'/pacients'} render={() => <PacientsContainer />} />
                <Route path={['/pacients/profile/', '/pacients/calendar', '/pacients/health', '/pacients/history', '/pacients/recommendations']} render={() => <ProfileContainer />}  />
                <Route path={'/survey'} render={() => <SurveyContainer />}  />
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
