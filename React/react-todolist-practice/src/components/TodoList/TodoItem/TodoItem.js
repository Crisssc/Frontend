import React from 'react';
class TodoItem extends React.Component {
  render() {
    const { todoItem, removeTodo } = this.props;
    return (
      <li className={todoItem.id}>
        <span>{todoItem.title}</span>
        <button onClick={() => removeTodo(todoItem.id)}>Delete</button>
      </li>
    );
  }
}
export default TodoItem;
