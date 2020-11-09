import './index.css';

import App from './components/App';
import { Provider } from 'react-redux';
import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
