import React from 'react';
import { Todo } from '../../modal/Todo';
import TodoItem from './TodoItem/TodoItem';
import { hocTodo } from '../HOC/hocTodo';

class TodoList extends React.Component {
  state = {
    inputValue: '',
  };
  onInputKeyup = (e) => {
    if (e.key === 'Enter') {
      const ranNum = Math.floor(Math.random() * 300);
      const { handleAddTodo } = this.props;
      const todoId = 1 + ranNum;
      console.log('ranNum', ranNum);
      const title = this.state.inputValue;
      const completed = false;
      const newTodo = new Todo(1, todoId, title, completed);
      handleAddTodo(newTodo);
      this.setState({ inputValue: '' });
    }
  };
  onInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  render() {
    const { todoList, handleDeleteTodo } = this.props;
    return (
      <div>
        <header>
          <h3>To-Do-List 啦</h3>
        </header>
        <input
          type="text"
          placeholder="Enter something🐔"
          onKeyUp={this.onInputKeyup}
          onChange={this.onInputChange}
          value={this.state.inputValue}
        />
        <ul>
          {todoList.map((item) => (
            <TodoItem
              key={item.id}
              todoItem={item}
              removeTodo={() => handleDeleteTodo(item.id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
