'use strict';

console.log('build-it-visible.js');

var toggle = false;

var btnToggle = function btnToggle() {
  toggle = !toggle;
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility App'
    ),
    React.createElement(
      'button',
      { onClick: btnToggle },
      'Hide / Show'
    ),
    toggle && React.createElement(
      'p',
      null,
      'The content.'
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
