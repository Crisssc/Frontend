'use strict';

console.log('App js is running!');

var app = {
  title: 'App title',
  subtitle: 'Subtitle',
  options: []
};

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  var option = event.target.elements.option.value;
  if (option) {
    app.options.push(option);
    event.target.elements.option.value = '';
    reRender();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  reRender();
};

var onMakeDecision = function onMakeDecision() {
  var ranNum = Math.random();
  console.log(ranNum);
};

var reRender = function reRender() {
  var appTemplate = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options:' : 'No options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length ? app.options.length : 0
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (op) {
        return React.createElement(
          'li',
          { key: op },
          op
        );
      })
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove All'
    ),
    React.createElement(
      'button',
      { onClick: onMakeDecision },
      'Pick a random task'
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option!'
      )
    )
  );

  ReactDOM.render(appTemplate, appRoot);
};

var appRoot = document.getElementById('app');

reRender();
