import { Icon, Menu } from 'semantic-ui-react';
import { setCurrentChannel, setPrivateChannel } from '../../actions';

import React from 'react';
import { connect } from 'react-redux';
import firebase from '../../firebase';

class DirectMessages extends React.Component {
  state = {
    activeChannel: '',
    users: [],
    user: this.props.currentUser,
    usersRef: firebase.database().ref('users'),
    connectedRef: firebase.database().ref('.info/connected'),
    presenceRef: firebase.database().ref('presence'),
  };

  componentDidMount() {
    if (this.state.user) {
      this.addListeners(this.state.user.uid);
    }
  }

  addListeners = (currentUserUid) => {
    let loadedUsers = [];
    this.state.usersRef.on('child_added', (snap) => {
      if (currentUserUid !== snap.key) {
        let user = snap.val();
        user['uid'] = snap.key;
        user['status'] = 'offline';
        loadedUsers.push(user);
        this.setState({ users: loadedUsers });
      }
    });

    this.state.connectedRef.on('value', (snap) => {
      if (snap.val() === true) {
        const ref = this.state.presenceRef.child(currentUserUid);
        ref.set(true);
        ref.onDisconnect().remove((err) => {
          if (err !== null) {
            console.error(err);
          }
        });
      }
    });

    this.state.presenceRef.on('child_added', (snap) => {
      if (currentUserUid !== snap.key) {
        // add status to users
        this.addStatusToUser(snap.key);
      }
    });

    this.state.presenceRef.on('child_removed', (snap) => {
      if (currentUserUid !== snap.key) {
        // add status to users
        this.addStatusToUser(snap.key, false);
      }
    });
  };

  addStatusToUser = (userId, connected = true) => {
    const updatedUsers = this.state.users.reduce((acc, user) => {
      if (user.uid === userId) {
        user['status'] = `${connected ? 'online' : 'offline'}`;
      }
      return acc.concet(user);
    }, []);
    this.setState({ users: updatedUsers });
  };

  isUserOnline = (user) => {
    return user.status === 'online';
  };

  changeChannel = (user) => {
    const channelId = this.getChannelId(user.uid);
    const channelData = {
      id: channelId,
      name: user.name,
    };

    this.props.setCurrentChannel(channelData);
    this.props.setPrivateChannel(true);

    this.setActiveChannel(user.uid); //UI
  };

  setActiveChannel = (userId) => {
    this.setState({ activeChannel: userId });
  };

  getChannelId = (userId) => {
    const currentUserId = this.state.user.uid;
    return userId < currentUserId
      ? `${userId}/${currentUserId}`
      : `${currentUserId}/${userId}`;
  };

  render() {
    const { users, activeChannel } = this.state;
    return (
      <Menu.Menu className="menu">
        <Menu.Item>
          <span>
            <Icon name="mail" /> DIRECT MESSAGES
          </span>{' '}
          ({users.length})
        </Menu.Item>
        {users.map((user) => (
          <Menu.Item
            key={user.uid}
            active={user.uid === activeChannel}
            onClick={() => this.changeChannel(user)}
            style={{ opacity: 0.7, fontStyle: 'italic' }}
          >
            <Icon
              name="circle"
              color={this.isUserOnline(user) ? 'green' : 'red'}
            />
            @ {user.name}
          </Menu.Item>
        ))}
        {/** Users to send direct message */}
      </Menu.Menu>
    );
  }
}

export default connect(null, { setCurrentChannel, setPrivateChannel })(
  DirectMessages
);
