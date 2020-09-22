import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import OptionModal from './OptionModal';
import Options from './Options';
import React from 'react';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }));
      }
    } catch (error) {
      // catch invalid json obj
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount() {
    console.log('component will unmount');
  }

  handleRemoveAllOptions = () => {
    this.setState(() => ({
      options: [],
    }));
  };

  handleRemoveOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((op) => op !== option),
    }));
  };

  handleOptionPick = () => {
    const num = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[num];
    this.setState(() => ({ selectedOption: option }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item!';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already existed';
    }

    this.setState((prevState) => ({
      options: [...prevState.options, option],
    }));
  };

  render() {
    const subtitle = 'Put your boring life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOption={this.state.options.length == 0}
          handleOptionPick={this.handleOptionPick}
        />
        <Options
          options={this.state.options}
          handleRemoveAllOptions={this.handleRemoveAllOptions}
          handleRemoveOption={this.handleRemoveOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal selectedOption={this.state.selectedOption} />
      </div>
    );
  }
}

export default IndecisionApp;
