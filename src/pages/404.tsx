import * as React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react-cjs';

export const ErrorPage404 = () =>
  <Grid centered verticalAlign="middle"
    style={{
      minHeight: '700px'
      }}
    >
    <Grid.Column>
      <Grid.Row style={{textAlign: 'center'}}>
        <Icon name="marker" size="huge"/>
        <Header as="h1">You are here!</Header>
        <Header as="h2">But nothing found for you #404</Header>
      </Grid.Row>
    </Grid.Column>
  </Grid>;

export default ErrorPage404;