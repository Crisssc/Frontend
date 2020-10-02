import './App.css';

import DataDashBoard from './components/DataDashBoard/DataDashBoard';
import Layout from './components/Layout/Layout';
import React from 'react';
import RenderPropsTodo from './components/renderPropsTodo/RenderPropsTodo';
import Test from './components/renderPropsTodo/Test';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <Layout>
      <RenderPropsTodo
        renderCount={(count, testMethod, todoList) => (
          <Test
            count={count}
            handleTestMethod={testMethod}
            todoList={todoList}
          />
        )}
        renderTodoList={(todoList, handleAddTodo, handleDeleteTodo) => (
          <TodoList
            todoList={todoList}
            handleAddTodo={handleAddTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      />
    </Layout>
  );
}

export default App;
