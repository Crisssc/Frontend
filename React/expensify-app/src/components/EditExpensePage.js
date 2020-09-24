import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return <div>From EditExpensePage, 🐔吧 {props.match.params.id}</div>;
};

export default EditExpensePage;
