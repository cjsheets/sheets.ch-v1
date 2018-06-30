import { Link } from 'gatsby';
import React from 'react';

import PostFooter from './post-footer/post-footer';
import PostHeader from './post-header/post-header';

interface ISiteContainer {
  location: string;
}

class SiteContainer extends React.Component<ISiteContainer, {}> {
  render() {
    const { location, children } = this.props;
    // const rootPath = `${__PATH_PREFIX__}/`;
    // if (location.pathname === rootPath) {

    return (
      <div>
        <PostHeader title={'frontmatter.title'} />
        {children}
          <PostFooter
            avatar={avatar}
            authorName={frontmatter.author.id}
            authorBio={frontmatter.author.bio}
          />
      </div>
    );
  }
}

export default SiteContainer;
