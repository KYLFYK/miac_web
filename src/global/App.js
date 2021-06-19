import styles from './App.module.scss';
import 'antd/dist/antd.css';

import { BrowserRouter, Route } from 'react-router-dom'

import MenuContainer from "./menu/MenuContainer"
import Home from "../components/home/Home"

function App() {
  return (
      <BrowserRouter>
        <div className={styles.app}>
            <aside className={styles.aside}>
                <MenuContainer />
            </aside>
            <div className={styles.content}>
                <Route path={['/home', '/']} render={() => <Home />} />
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
