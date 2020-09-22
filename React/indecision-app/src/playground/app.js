class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this);
    this.handleOptionPick = this.handleOptionPick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
    this.state = {
      options: [],
    };
  }

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

  handleRemoveAllOptions() {
    this.setState(() => ({
      options: [],
    }));
  }

  handleRemoveOption(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter((op) => op !== option),
    }));
  }

  handleOptionPick() {
    const num = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[num];
    console.log(option);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item!';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already existed';
    }

    this.setState((prevState) => ({
      options: [...prevState.options, option],
    }));
  }

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
      </div>
    );
  }
}

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

    this.setState(() => ({
      error: error,
    }));

    if (!error) {
      event.target.elements.option.value = '';
    }
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
