import React from 'react';

const Option = (props) => {
  return (
    <div>
      {props.option}
      <button
        onClick={() => {
          props.handleRemoveOption(props.option);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Option;
