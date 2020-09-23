import Option from './Option';
import React from 'react';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        className="button button--link "
        onClick={props.handleRemoveAllOptions}
      >
        Remove All
      </button>
    </div>

    {props.options.length == 0 && (
      <p className="widget__message">So far has no option to DO!</p>
    )}
    {props.options.map((o, index) => {
      return (
        <Option
          key={o}
          count={index + 1}
          option={o}
          handleRemoveOption={props.handleRemoveOption}
        />
      );
    })}
  </div>
);

export default Options;
