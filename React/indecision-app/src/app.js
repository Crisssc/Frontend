class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this);
    this.handleOptionPick = this.handleOptionPick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options,
    };
  }
  handleRemoveAllOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }

  handleOptionPick() {
    const num = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[num];
    console.log(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already existed';
    }

    this.setState((prevState) => {
      return {
        options: [...prevState.options, option],
      };
    });
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

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
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecition',
};

const Action = (props) => {
  return (
    <div>
      <button disabled={props.hasOption} onClick={props.handleOptionPick}>
        What should I DO!!
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleRemoveAllOptions}>Remove All</button>
      {props.options.map((o) => {
        return <Option key={o} option={o} />;
      })}
    </div>
  );
};

const Option = (props) => {
  return <div>{props.option}</div>;
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  addOption(event) {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error: error,
      };
    });

    event.target.elements.option.value = '';
  }
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
