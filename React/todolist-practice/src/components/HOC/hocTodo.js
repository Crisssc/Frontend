import { addTodo, deleteTodo, getAllTodos } from '../../API/TodoAPI';

import React from 'react';

export const hocTodo = (WrappedComponent) => {
  return class NewComponent extends React.Component {
    state = {
      todoList: [],
    };

    componentDidMount() {
      getAllTodos().then((data) => {
        this.setState(() => ({ todoList: data }));
      });
    }

    handleAddTodo = (inputText) => {
      // this.setState({ todoList: [...this.state.todoList, inputText] });
      addTodo(inputText).then((data) => {
        this.setState({ todoList: [data, ...this.state.todoList] });
      });
    };

    handleDeleteTodo = (id) => {
      deleteTodo(id)
        .then((data) => {
          this.setState({
            todoList: this.state.todoList.filter((item) => item.id !== id),
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    render() {
      return (
        <WrappedComponent
          handleAddTodo={this.handleAddTodo}
          handleDeleteTodo={this.handleDeleteTodo}
          todoList={this.state.todoList}
        ></WrappedComponent>
      );
    }
  };
};
