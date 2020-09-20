console.log('from counter');

class App extends React.Component {
  render() {
    return <Counter />;
  }
}

class Counter extends React.Component {
  constructor() {
    super();
    this.onAddOne = this.onAddOne.bind(this);
    this.onMinusOne = this.onMinusOne.bind(this);
    this.onReset = this.onReset.bind(this);
    this.state = {
      count: 0,
    };
  }

  onAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  onMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  onReset() {
    this.setState((prevState) => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.onAddOne}>+</button>
        <button onClick={this.onMinusOne}>-</button>
        <button onClick={this.onReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
