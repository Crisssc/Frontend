import './index.css';

import { addTodo, initTodo } from './Redux/actions/todos';

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './Redux/store/store';
import { getAllTodos } from './API/TodoAPI';

const store = configureStore();
// store.dispatch(addTodo());
// store.dispatch(
//   initTodo(() => {
//     return { id: 0, title: 'newTodo' };
//   })
// );
// console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
