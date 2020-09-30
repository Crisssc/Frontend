import { combineReducers, createStore } from 'redux';

import todosReducer from '../reducers/todos';

export default () => {
  const store = createStore(combineReducers({ todos: todosReducer }));
  return store;
};
