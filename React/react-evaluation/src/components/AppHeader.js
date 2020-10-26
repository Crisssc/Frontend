import { Icon, Input } from 'semantic-ui-react';

import { NavLink } from 'react-router-dom';
import React from 'react';

class AppHeader extends React.Component {
  state = {
    inputValue: '',
  };

  handleInputOnChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  inputOnSubmit = (event) => {
    if (event.key === 'Enter') {
      this.props.handleSubmitInput(this.state.inputValue);
    }
  };
  render() {
    return (
      <header>
        <NavLink
          className="navItem"
          to="/home"
          activeClassName="is-active"
          exact={true}
        >
          HOME
        </NavLink>
        <NavLink className="navItem" to="/following">
          FOLLOWING
        </NavLink>
        <Input className="navItem" icon placeholder="Search Github user...">
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputOnChange}
            onKeyUp={this.inputOnSubmit}
          />
          <Icon name="search" />
        </Input>
      </header>
    );
  }
}

export default AppHeader;
