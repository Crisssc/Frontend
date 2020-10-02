import { v1 } from 'uuid';
export const addNewTodo = ({
  id = v1(),
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
