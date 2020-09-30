export const addTodo = ({
  id = 10086,
  title = '',
  completed = false,
} = {}) => ({
  type: 'ADD_TODO',
  newTodo: {
    id,
    title,
    completed,
  },
});

export const initTodo = (todos) => ({
  type: 'INIT_TODOS',
  todos,
});
