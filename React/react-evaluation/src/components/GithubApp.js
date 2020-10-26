import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AppHeader from './AppHeader';
import Following from './Following';
import Home from './Home';
import React from 'react';
import axios from 'axios';

class GithubApp extends React.Component {
  state = {
    user: {},
    following: [],
    pageIndex: 1,
    errors: [],
    loading: false,
  };

  handleSubmitInput = (value) => {
    console.log('from app', value);
    this.setState({ loading: true });
    axios
      .get(`https://api.github.com/users/${value}`, {
        auth: {
          username: 'Crisssc',
          password: '0d9c1e6a6c9219de56f64bf451ef7ef9fee932ff',
        },
      })
      .then((user) => {
        console.log(user.data);
        this.setState({
          pageIndex: 1,
          user: user.data,
          loading: false,
          errors: [],
        });
      })
      .catch((err) => {
        this.setState({
          errors: this.state.errors.concat(err),
          loading: false,
        });
      });

    // initialize the first 10 following
    this.handleFollowingFetch(value, this.state.pageIndex);
  };

  handleFollowingFetch = (user, pageIndex) => {
    const pageSize = 10;
    this.setState({ loading: true });
    axios
      .get(
        `https://api.github.com/users/${user}/following?page=${pageIndex}&per_page=${pageSize}`,
        {
          auth: {
            username: 'unknown',
            password: 'secret',
          },
        }
      )
      .then((following) => {
        // console.log('following', following.data);
        const newFollowing = this.state.following.concat(following.data);
        this.setState({ following: newFollowing, loading: false, errors: [] });
      })
      .catch((err) => {
        this.setState({
          errors: this.state.errors.concat(err),
          loading: false,
        });
      });
  };

  handleLoadMore = () => {
    const newPageIndex = this.state.pageIndex + 1;
    this.setState({ pageIndex: newPageIndex });
    console.log(newPageIndex, this.state.user);
    this.handleFollowingFetch(this.state.user.login, newPageIndex);
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <AppHeader handleSubmitInput={this.handleSubmitInput}></AppHeader>
          <Switch>
            <Route
              path="/home"
              exact={true}
              render={() => (
                <Home
                  errors={this.state.errors}
                  user={this.state.user}
                  loading={this.state.loading}
                />
              )}
            />
            <Route
              path="/following"
              render={() => (
                <Following
                  handleLoadMore={this.handleLoadMore}
                  pageIndex={this.state.pageIndex}
                  user={this.state.user}
                  following={this.state.following}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default GithubApp;
