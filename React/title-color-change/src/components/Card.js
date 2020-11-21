import React from 'react';

class Card extends React.Component {
  buttonOnClick = () => {
    this.props.hendleOnSelect(this.props.info.index);
  };

  render() {
    return (
      <div
        className={`card-container ${
          this.props.info.selected && this.props.info.color
        }`}
      >
        <h1>Subtitle: {this.props.color}</h1>
        <p>
          Of on affixed civilly moments promise explain fertile in. Assurance
          advantage belonging happiness departure so of. Now improving and one
          sincerity intention allowance commanded not. Oh an am frankness be
          necessary earnestly advantage estimable extensive
        </p>
        <button onClick={this.buttonOnClick}>Change the color</button>
      </div>
    );
  }
}

export default Card;
