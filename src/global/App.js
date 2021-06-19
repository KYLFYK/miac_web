import styles from './App.module.scss';
import 'antd/dist/antd.css';

import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import { Breadcrumb } from "antd"

import MenuContainer from "./menu/MenuContainer"
import HomeContainer from "../components/home/HomeContainer"

function App() {
  return (
      <BrowserRouter>
        <div className={styles.app}>
            <aside className={styles.aside}>
                <MenuContainer />
            </aside>
            <div className={styles.content}>
                <Route exact path={['/home', '/']} render={() => <HomeContainer />} />
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
