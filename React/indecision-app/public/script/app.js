'use strict';

console.log('App js is running!');

var user = {
  myName: 'zc',
  age: 10,
  loc: 'Earth'
};

var getLoc = function getLoc(loc) {
  // return loc ? <p>Location: {loc}</p> : undefined;
  if (loc) {
    return React.createElement(
      'p',
      null,
      loc
    );
  }
};

// JSX - Javascript XML

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.myName.toUpperCase()
  ),
  user.age && user.age >= 17 && React.createElement(
    'p',
    null,
    user.age
  ),
  getLoc(user.loc)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
