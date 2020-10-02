import { addNewTodo, initTodo } from '../../Redux/actions/todos';
import { addTodo, deleteTodo, getAllTodos } from '../../API/TodoAPI';

import React from 'react';
import configureStore from '../../Redux/store/store';
import { connect } from 'react-redux';

const store = configureStore();
class RenderPropsTodo extends React.Component {
  state = {
    todoList: [],
    count: 0,
  };

  componentDidMount() {
    getAllTodos().then((data) => {
      this.setState(() => ({ todoList: data }));
      data.forEach((element) => {
        store.dispatch(
          addNewTodo({
            id: element.id,
            title: element.id,
            completed: element.completed,
          })
        );
      });
    });
  }

  handleAddTodo = (inputText) => {
    // this.setState({ todoList: [...this.state.todoList, inputText] });
    addTodo(inputText).then((data) => {
      this.setState({ todoList: [data, ...this.state.todoList] });
    });
    //console.log(store.getState());
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

  testMethod = (num) => {
    this.setState({ count: this.state.count + num });
  };

  render() {
    return (
      <div>
        {this.props.renderCount(
          this.state.count,
          this.testMethod,
          this.state.todoList
        )}
        {this.props.renderTodoList(
          this.state.todoList,
          this.handleAddTodo,
          this.handleDeleteTodo
        )}
      </div>
    );
  }
}

export default connect()(RenderPropsTodo);
