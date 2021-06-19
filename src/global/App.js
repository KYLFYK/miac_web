import styles from './App.module.scss';
import 'antd/dist/antd.css';

import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import { Breadcrumb } from "antd"

import MenuContainer from "./menu/MenuContainer"
import HomeContainer from "../components/home/HomeContainer"

const routes = [
    {
        path: '/',
        breadcrumbName: 'Главная',
    }
];
function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
        <span>{route.breadcrumbName}</span>
    ) : (
        <NavLink to={paths.join('/')}>{route.breadcrumbName}</NavLink>
    );
}

function App() {
  return (
      <BrowserRouter>
        <div className={styles.app}>
            <aside className={styles.aside}>
                <MenuContainer />
            </aside>
            <div className={styles.content}>
                <Breadcrumb itemRender={itemRender} routes={routes} />
                <Route exact path={['/home', '/']} render={() => <HomeContainer />} />
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
