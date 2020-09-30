import './index.css';

import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { addExpense } from './actions/expenses';
import configureStore from './store/configureStore';
import getVisibleExpense from './selectors/expenses';
import { setTextFilter } from './actions/filters';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 312 }));

store.dispatch(
  addExpense({
    description: 'gas bill billlllll',
    amount: 8989,
    createdAt: 2000,
  })
);

store.dispatch(addExpense({ description: 'water bill', amount: 10962 }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
