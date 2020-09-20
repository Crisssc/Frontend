console.log('from toggle');

class App extends React.Component {
  render() {
    return <Toggle />;
  }
}

class Toggle extends React.Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);

    this.state = {
      visibility: false,
    };
  }

  toggle() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Content:</h1>
        <button onClick={this.toggle}>
          {this.state.visibility ? 'hide' : 'show'}
        </button>
        {this.state.visibility && (
          <div>
            <p>Show me!</p>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
