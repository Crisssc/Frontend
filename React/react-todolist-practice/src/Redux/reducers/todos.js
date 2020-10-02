const todoReducerState = [];

export default (state = todoReducerState, action) => {
  switch (action.type) {
    case 'INIT_TODOS':
      console.log(action.type);
      console.log('action.todos', action.todos);
      return [...state, action.todos];
    case 'ADD_TODO':
      console.log(action.type);
      return [...state, action.newTodo];
    default:
      return '';
  }
};
