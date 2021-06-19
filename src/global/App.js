import styles from './App.module.scss';
import 'antd/dist/antd.css';

import { BrowserRouter, Route } from 'react-router-dom'

import MenuContainer from "./menu/MenuContainer"
import HomeContainer from "../components/home/HomeContainer"
import PacientsContainer from "../components/pacients/PacientsContainer"
import ProfileContainer from "../components/profile/ProfileContainer"

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
                <Route path={'/pacients/profile/'} render={() => <ProfileContainer />}  />
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
