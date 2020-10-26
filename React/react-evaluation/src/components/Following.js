import { Button, Grid, Header, Image, List, Segment } from 'semantic-ui-react';

import React from 'react';

class Following extends React.Component {
  handleLoadMore = () => {
    console.log('loadmore');

    this.props.handleLoadMore();
  };

  render() {
    return (
      <Segment style={{ height: '100vh', width: '45wh' }}>
        <Grid textAlign="center">
          {this.props.user.login === undefined ? (
            <Header>
              <h3 className="textHeader">Following no one</h3>
            </Header>
          ) : (
            <Segment.Group>
              <Segment>
                {this.props.pageIndex * 10} / {this.props.user.following} of the
                following:{' '}
              </Segment>
              <Segment.Group>
                <List selection verticalAlign="middle">
                  {this.props.following.map((user) => (
                    <List.Item key={user.id} float="left">
                      <Image avatar src={user.avatar_url} />
                      <List.Content>
                        <List.Header>{user.login}</List.Header>
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
                {this.props.loading ? (
                  <Button loading primary>
                    Loading
                  </Button>
                ) : (
                  <Button basic color="blue" onClick={this.handleLoadMore}>
                    Load more
                  </Button>
                )}
              </Segment.Group>
            </Segment.Group>
          )}
        </Grid>
      </Segment>
    );
  }
}

export default Following;
