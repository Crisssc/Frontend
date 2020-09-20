console.log('App js is running!');

const app = {
  title: 'App title',
  subtitle: 'Subtitle',
  options: [],
};

const onFormSubmit = (event) => {
  event.preventDefault();
  const option = event.target.elements.option.value;
  if (option) {
    app.options.push(option);
    event.target.elements.option.value = '';
    reRender();
  }
};

const removeAll = () => {
  app.options = [];
  reRender();
};

const onMakeDecision = () => {
  const ranNum = Math.floor(Math.random() * app.options.length);
  alert(app.options[ranNum]);
};

const reRender = () => {
  const appTemplate = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
      <ol>
        {app.options.map((op) => (
          <li key={op}>{op}</li>
        ))}
      </ol>
      <button onClick={removeAll}>Remove All</button>
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>
        Pick a random task
      </button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option!</button>
      </form>
    </div>
  );

  ReactDOM.render(appTemplate, appRoot);
};

const appRoot = document.getElementById('app');

reRender();
