import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  addOption = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({
      error: error,
    }));

    if (!error) {
      event.target.elements.option.value = '';
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addOption}>
          <input type="text" name="option" />
          <button>Add option!</button>
        </form>
        {this.state.error && <p>{this.state.error}!</p>}
      </div>
    );
  }
}
