import Link, { GatsbyLinkProps } from 'gatsby-link';
import { times } from 'lodash';
import * as React from 'react';

import { frontmatter_2, ImageSharp } from '../../types/graphql-types';

interface IPostCard extends React.HTMLProps<HTMLDivElement> {
  avatar: ImageSharp;
  excerpt: string;
  frontmatter: frontmatter_2;
  slug: string;
  timeToRead: number;
}

export const PostCard = (props: IPostCard) => {
  return (
    <div>
      <Link to={props.slug}>
         {props.frontmatter.title}
        <div>
          <div style={{ fontWeight: 400 }}>
            {props.frontmatter.author.id}
          </div>
          <div style={{ margin: 0 }}>
            {props.frontmatter.createdDate} - {props.timeToRead} min read
          </div>
        </div>
        {props.excerpt}
      </Link>
    </div>
  );
};

export default PostCard;