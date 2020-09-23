import React from 'react';

const Action = (props) => (
  <div>
    <button
      className="big-button"
      disabled={props.hasOption}
      onClick={props.handleOptionPick}
    >
      What should I DO??
    </button>
  </div>
);

export default Action;
