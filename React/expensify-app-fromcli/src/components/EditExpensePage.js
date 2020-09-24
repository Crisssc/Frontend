import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return <div>From EditExpensePage, 雞掰毛 x {props.match.params.id}</div>;
};

export default EditExpensePage;
