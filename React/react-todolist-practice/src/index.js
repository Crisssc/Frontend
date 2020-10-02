import './index.css';

import { addNewTodo, initTodo } from './Redux/actions/todos';

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './Redux/store/store';
import { getAllTodos } from './API/TodoAPI';

const store = configureStore();
// console.log(store.getState());

// store.dispatch(
//   addNewTodo({ id: 10088, title: 'new added todo', completed: false })
// );
console.log(store.getState());
// store.dispatch(
//   initTodo(() => {
//     return { id: 0, title: 'newTodo' };
//   })
// );
// console.log(store.getState());

console.log(store.getState());
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
