import Header from '../Header/Header';
import React from 'react';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        <hr />
        <main>{children}</main>
      </div>
    );
  }
}

export default Layout;
