import Option from './Option';
import React from 'react';

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleRemoveAllOptions}>Remove All</button>
      {props.options.length == 0 && <p>So far has no option to DO!</p>}
      {props.options.map((o) => {
        return (
          <Option
            key={o}
            option={o}
            handleRemoveOption={props.handleRemoveOption}
          />
        );
      })}
    </div>
  );
};

export default Options;
