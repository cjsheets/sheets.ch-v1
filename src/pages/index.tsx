import * as React from 'react';

interface IIndex {
  location: {
    pathname: string;
  };
}

export class Index extends React.Component<IIndex, {}> {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
      </div>
    );
  }
}

export default Index;
