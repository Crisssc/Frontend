import React from 'react';

class Control extends React.Component {
  state = {
    inputValue: '',
  };

  inputOnChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  inputOnSubmit = (event) => {
    if (event.key === 'Enter') {
      this.props.getCardNum(this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  };

  startGame = () => {
    this.props.generateCards();
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.inputOnChange}
          onKeyUp={this.inputOnSubmit}
        />
        <button onClick={this.startGame}>start</button>
        <button>reset(not done yet)</button>
      </div>
    );
  }
}

export default Control;
