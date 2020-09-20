console.log('build-it-visible.js');

let toggle = false;

const btnToggle = () => {
  toggle = !toggle;
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>Visibility App</h1>
      <button onClick={btnToggle}>
        {toggle ? 'Hide Content' : 'Show Content'}
      </button>
      {toggle && <p>The content.</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
