import Link, { GatsbyLinkProps } from 'gatsby-link';
import { times } from 'lodash';
import * as React from 'react';

import { frontmatter_2, ImageSharp } from '../../types/graphql-types';

import * as styles from './post-card.scss';

interface IPostCard extends React.HTMLProps<HTMLDivElement> {
  avatar: ImageSharp;
  excerpt: string;
  frontmatter: frontmatter_2;
  slug: string;
  timeToRead: number;
}

export const PostCard = (props: IPostCard) => {
  return (
    <div className={styles.postCardContainer}>
      <Link to={props.slug}>
        <div className={styles.postCardTitle}>
         {props.frontmatter.title}
        </div>
        <div className={styles.postCardDate}>
          {props.frontmatter.createdDate} - {props.timeToRead} min read
        </div>
        {props.excerpt}
      </Link>
    </div>
  );
};

export default PostCard;