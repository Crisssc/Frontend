import 'semantic-ui-css/semantic.min.css';

import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { clearUser, setUser } from './actions';

import App from './App';
import Login from './Components/Auth/Login';
import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Components/Auth/Register';
import Spinner from './Spinner';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
// to have a listener of firebase to take action when user logged in
import firebase from './firebase';
import rootReducer from './reducers/index';

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // console.log(user);
        this.props.setUser(user);
        this.props.history.push('/');
      } else {
        this.props.clearUser();
        this.props.history.push('/login');
      }
    });
  }

  render() {
    return this.props.isLoading ? (
      <Spinner />
    ) : (
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    );
  }
}

const mapStateFromProps = (state) => ({
  isLoading: state.user.isLoading,
});

// to make redirect of history push('') outside of the <BrowserRouter>, we need 👇
// destruct the setUser in connect so that setUser can be used in Root.Class as props
const RootWithAuth = withRouter(
  connect(mapStateFromProps, { setUser, clearUser })(Root)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RootWithAuth />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
