import { Icon, Menu } from 'semantic-ui-react';
import { setCurrentChannel, setPrivateChannel } from '../../actions';

import React from 'react';
import { connect } from 'react-redux';

class Starred extends React.Component {
  state = {
    activeChannel: '',
    starredChannels: [],
  };

  setActiveChannel = (channel) => {
    this.setState({ activeChannel: channel.id });
  };

  changeChannel = (channel) => {
    this.setActiveChannel(channel);
    this.props.setCurrentChannel(channel);
    this.props.setPrivateChannel(false);
  };

  displayChannels = (starredChannels) => {
    return (
      starredChannels.length > 0 &&
      starredChannels.map((channel) => (
        <Menu.Item
          key={channel.id}
          onClick={() => this.changeChannel(channel)}
          name={channel.name}
          style={{ opacity: 0.7 }}
          active={channel.id === this.state.activeChannel}
        >
          # {channel.name}
        </Menu.Item>
      ))
    );
  };

  render() {
    const { starredChannels } = this.state;

    return (
      <Menu.Menu className="menu">
        <Menu.Item>
          <span>
            <Icon name="star" /> SARREd
          </span>{' '}
          ({starredChannels.length})
        </Menu.Item>
        {/** channels */}
        {this.displayChannels(starredChannels)}
      </Menu.Menu>
    );
  }
}

export default connect(null, { setCurrentChannel, setPrivateChannel })(Starred);
