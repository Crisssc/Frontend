# Frontend

Frontend projects

## Indecision App

By these two scripts:

`<script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>`
`<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>`

You could creat your own small React app

**Babel** - a JavaScript compiler can be used to compile JSX to older version of javascript the browsers could understand.
Install it in the app so that I could write the JSX instead of tedious React.createElement() call

After install babel plugin in the app by command below👇.
(base) Zhichengde-MacBook-Pro:indecision-app zhichengchen\$ npm install -g babel-cli

Type the command below👇 to all it automatically compile the JSX to corresponding file that browser could understand.

> n\$ babel src/app.js --out-file=public/script/app.js --presets=env,react --watch

### Connect to data dynamicly

Pull out the data from the variable to the JSX:

- `<p>{user.name}</p>`
- `{function(param)}`
- `{user.userAge ? user.userAge : 0}`
- `boolean && Ignore` [if boolean is true, it returns Ignore, if boolean is false, it return false!!!]
  `{(user.age && user.age >= 17) && <p>{user.age}</p>}`
  So, if user age is larger than 17, user.age is shows up; if user age is not exist or less than 18, age won't show.

### Event and attributes:Different attributes in React DOM: (google it)

- className
- id
- autoFocus
- placeholder
- blabla...

The template is re-rendered when the state of data change. Only the specific part of the template is updated.

Set up a form:
**disable the default behavior: refresh the whole page when form is submited.**
`event.preventDefault();`

SyntheticEvent React

- form events: onChange, onInput, onSubmit).
- mouse events: onClick, onDrag, blabla
- code:
  `const onFormSubmit = (event) => event.preventDefault();`

## React Component

### Class Component

Create the react component:

- It requires a method to be defined: render(). render method return template.
- Create nested component

React Component Props

- Components pass props to communicate to each other
- access the props by: this.props

Method Binding:

- method defined outside the render() method cannot dirrectly access the prop value by this.props.blabla.
- You use **bind()**.
- Re-construct the Constructor: `this.handleRemoveAll = this.handleRemoveAll.bind(this); // you bind the method once in the constructor and it is efficient.`

Small React App sample:

- Set up default state object
- change state based on event: setState((prevState)=>{...})
- component re-rendered using new state value
- start again at 3

Sub-component could have sub state

- For example, it has the error state to handle the error message when the input is invalid.

Recap:

- Props vs State
- parent component ---(props(if any))---> child component
- Props:
- -- An object
- -- Can be used when rendering
- -- Changes (from parent) cause re-render
- -- Come from above
- -- Can't be changed by component itself
- State
- -- An object
- -- Can be used when rendering
- -- Changes cause re-renders
- -- Defined in component itself
- -- Can be changed by component itself

Stateless Functional Component
(Just presentation, not concern with managing complex state.)

- Allow you to set the defaultprops for a component
  ` ComponentName.defaultProps = { attribute: 'something here' }`
  // but you need to _remember to add props as a parameter in the constructor signiture_

Arrow function to the setState method:
this.setState(() => {
return {
error: error;
}
});
---above could change to below---
this.setState(() => ({error : error}));

Pass action down multiple layers.

Lifecycle methods in React: let you run code at specific times during a component's life.
[React web page has more details!!!]

- componentDidMount: called internally, used in class-based component
- componentDidUpdate: called after state value changed, or after props value changed; it could have two parameters: prevProps, prevState.
- componentWillUnmount: called when (before) component goes away, (e.g. fired when go to other web page)

Data in LocalStorage is stored in String format, so we use JSON method.
By using localStorage, you use componentDidMount to fetch data, use componentDidUpdate to store data.

=========================
WebPack:

- entry
- output {path, filename}
- module {rule[{loader, test, exclude,devtool}]}

Why Webpack??

- how it helps: organize our javascript files (too many script tag in index.html could make the web slow). What make webpack doing this uniquely: it provides syntax -- import&export to help you connect js files dynamically. Only import module that you need.

export: 2 types

- default export: for example, export { f1 as default }; import f1 from './../' (没有{})
- named exports: for example, export { funcName }, import { funcName } from './../'; OR export const func = blabla..., import { func } from './../';

loader in Webpack:
transform file with babel

devtool: 'cheap-module-eval-source-map', --> help you debug by locating which line of code causes the error.

devServer: blablabla

new class properties synta
