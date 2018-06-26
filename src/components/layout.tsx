import { Link } from 'gatsby';
import React from 'react';

class Layout extends React.Component {
  render() {
    const { location, children } = this.props;
    // const rootPath = `${__PATH_PREFIX__}/`;
    // if (location.pathname === rootPath) {

    return (
      <div>
        <Link to={'/'} >
          Sheets.ch
        </Link>
        {children}
      </div>
    );
  }
}

export default Layout;
