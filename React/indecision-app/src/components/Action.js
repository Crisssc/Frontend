import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button disabled={props.hasOption} onClick={props.handleOptionPick}>
        What should I DO!!
      </button>
    </div>
  );
};

export default Action;
