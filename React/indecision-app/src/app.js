console.log('App js is running!');

var user = {
  myName: 'zc',
  age: 10,
  loc: 'Earth',
};

var getLoc = (loc) => {
  // return loc ? <p>Location: {loc}</p> : undefined;
  if (loc) {
    return <p>{loc}</p>;
  }
};

// JSX - Javascript XML

var template = (
  <div>
    <h1>{user.myName.toUpperCase()}</h1>
    {user.age && user.age >= 17 && <p>{user.age}</p>}
    {getLoc(user.loc)}
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
