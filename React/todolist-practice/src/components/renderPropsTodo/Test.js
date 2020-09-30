import React from 'react';

class Test extends React.Component {
  render() {
    const { count, handleTestMethod, todoList } = this.props;
    return (
      <div>
        <p>Todo Count: {count}</p>
        <span>
          <button onClick={() => handleTestMethod(2)}>鸡掰+2</button>
        </span>
        <p>Length of to-do list 啦: {todoList.length}</p>
        <hr />
      </div>
    );
  }
}

export default Test;
