import {
  Card,
  Dimmer,
  Grid,
  Header,
  Icon,
  Image,
  Loader,
  Segment,
} from 'semantic-ui-react';

import React from 'react';

const Home = (props) => {
  return (
    <Segment style={{ height: '100vh' }}>
      {props.loading ? (
        <Segment style={{ height: '100vh' }}>
          <Dimmer active inverted>
            <Loader inverted content="Loading" />
          </Dimmer>

          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
      ) : (
        <Segment style={{ height: '100vh' }}>
          {props.errors.length !== 0 ? (
            <Grid textAlign="center">
              <Header>
                <h3 className="textHeader">No exist user...</h3>
              </Header>
            </Grid>
          ) : (
            <Grid textAlign="center">
              {props.user.login === undefined ? (
                <Header>
                  <h3 className="textHeader">No user to show...</h3>
                </Header>
              ) : (
                <div className="cardItem">
                  <Card>
                    <Image src={props.user.avatar_url} />
                    <Card.Content>
                      <Card.Header>{props.user.login}</Card.Header>
                      <Card.Description>
                        Updated at: {props.user.updated_at}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Icon name="user" />
                      Following {props.user.following}
                    </Card.Content>
                  </Card>
                </div>
              )}
            </Grid>
          )}
        </Segment>
      )}
    </Segment>
  );
};

export default Home;
