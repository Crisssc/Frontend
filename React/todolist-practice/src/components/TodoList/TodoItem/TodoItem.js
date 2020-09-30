import React from 'react';
class TodoItem extends React.Component {
  render() {
    const { todoItem, removeTodo } = this.props;
    return (
      <li>
        <span>{todoItem.title}</span>
        <button id={todoItem.id} onClick={() => removeTodo(todoItem.id)}>
          Delete
        </button>
      </li>
    );
  }
}
export default TodoItem;
