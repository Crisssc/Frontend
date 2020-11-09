import './App.css';

import ColorPanel from './Components/ColorPanel/ColorPanel';
import { Grid } from 'semantic-ui-react';
import Messages from './Components/Messages/Messages';
import MetaPanel from './Components/MetaPanel/MetaPanel';
import React from 'react';
import SidePanel from './Components/SidePanel/SidePanel';
import { connect } from 'react-redux';

const App = ({
  currentUser,
  currentChannel,
  setPrivateChannel,
  userPosts,
  primaryColor,
  secondaryColor,
}) => {
  return (
    <Grid
      columns="equal"
      className="app"
      style={{ background: secondaryColor }}
    >
      <ColorPanel
        key={currentUser && currentUser.name}
        currentUser={currentUser}
      />
      <SidePanel
        key={currentUser && currentUser.uid}
        currentUser={currentUser}
        primaryColor={primaryColor}
      />

      <Grid.Column style={{ marginLeft: 320 }} className="message_header_seg">
        <Messages
          key={currentChannel && currentChannel.id}
          currentChannel={currentChannel}
          currentUser={currentUser}
          setPrivateChannel={setPrivateChannel}
        />
      </Grid.Column>
      <Grid.Column width={4} className="metapanel_seg">
        <MetaPanel
          key={currentChannel && currentChannel.name}
          setPrivateChannel={setPrivateChannel}
          currentChannel={currentChannel}
          userPosts={userPosts}
        />
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  currentChannel: state.channel.currentChannel,
  setPrivateChannel: state.channel.setPrivateChannel,
  userPosts: state.channel.userPosts,
  primaryColor: state.colors.primaryColor,
  secondaryColor: state.colors.secondaryColor,
});

export default connect(mapStateToProps)(App);
