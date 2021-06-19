import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"

import './index.scss';

import App from './global/App';
import reportWebVitals from './reportWebVitals';
import store from './state/store'

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
