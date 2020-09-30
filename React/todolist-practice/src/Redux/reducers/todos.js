const todoReducerState = [];

export default (state = todoReducerState, action) => {
  switch (action.type) {
    case 'INIT_TODOS':
      console.log(action.type);
      return [...state, action.todos];
    case 'ADD_TODO':
      console.log(action.type);
      return [...state, action.todos];
    default:
      return '';
  }
};
