let count = 0;
const addOne = () => {
  count += 1;
  renderCounterApp();
};

const minusOne = () => {
  count -= 1;
  renderCounterApp();
};

const reset = () => {
  count = 0;
  renderCounterApp();
};

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+</button>
      <button onClick={minusOne}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

const appRoot = document.getElementById('app');

renderCounterApp(); // initialized the template object
