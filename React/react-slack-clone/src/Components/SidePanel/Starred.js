import { Icon, Menu } from 'semantic-ui-react';
import { setCurrentChannel, setPrivateChannel } from '../../actions';

import React from 'react';
import { connect } from 'react-redux';
import firebase from '../../firebase';

class Starred extends React.Component {
  state = {
    user: this.props.currentUser,
    // usersRef: firebase.database().ref('users'),
    userRef: firebase.database().ref('user'),
    activeChannel: '',
    starredChannels: [],
  };

  componentDidMount() {
    if (this.state.user) {
      this.addListeners(this.state.user.uid);
    }
  }

  componentWiilUnmount() {
    this.removeListeners();
  }

  removeListeners = () => {
    // this.state.usersRef.child(`${this.state.user.uid}/starred`).off();
    this.state.userRef.child(`${this.state.user.uid}/starred`).off();
  };

  addListeners = (userId) => {
    this.state.userRef
      .child(userId)
      .child('starred')
      .on('child_added', (snap) => {
        const starredChannel = { id: snap.key, ...snap.val() };
        this.setState({
          starredChannels: [...this.state.starredChannels, starredChannel],
        });
      });

    this.state.userRef
      .child(userId)
      .child('starred')
      .on('child_removed', (snap) => {
        const channelToRemove = { id: snap.key, ...snap.val() };
        const filterredChannels = this.state.starredChannels.filter(
          (channel) => {
            return channel.id !== channelToRemove.id;
          }
        );
        this.setState({
          starredChannels: filterredChannels,
        });
      });
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
            <Icon name="star" /> SARRED
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
