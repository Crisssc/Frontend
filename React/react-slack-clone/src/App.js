import './App.css';

import ColorPanel from './Components/ColorPanel/ColorPanel';
import { Grid } from 'semantic-ui-react';
import Messages from './Components/Messages/Messages';
import MetaPanel from './Components/MetaPanel/MetaPanel';
import React from 'react';
import SidePanel from './Components/SidePanel/SidePanel';
import { connect } from 'react-redux';

const App = ({ currentUser, currentChannel, setPrivateChannel }) => {
  return (
    <Grid columns="equal" className="app" style={{ background: '#eee' }}>
      <ColorPanel />
      <SidePanel
        key={currentUser && currentUser.uid}
        currentUser={currentUser}
      />

      <Grid.Column style={{ marginLeft: 320 }}>
        <Messages
          key={currentChannel && currentChannel.id}
          currentChannel={currentChannel}
          currentUser={currentUser}
          setPrivateChannel={setPrivateChannel}
        />
      </Grid.Column>
      <Grid.Column width={4}>
        <MetaPanel />
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  setPrivateChannel: state.channel.setPrivateChannel,
});

export default connect(mapStateToProps)(App);
