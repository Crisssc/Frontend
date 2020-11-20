import React from 'react';

class Control extends React.Component {
  state = {
    inputValue: '',
  };

  inputOnChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  inputOnSubmit = (event) => {
    if (event.key === 'Enter' && event.target.value !== '') {
      this.props.getCardNum(this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  };

  onReset = () => {
    this.props.resetHandler();
  };

  render() {
    return (
      <div className="control-container">
        <label>Enter the # of card pairs: </label>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.inputOnChange}
          onKeyUp={this.inputOnSubmit}
        />
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

export default Control;
