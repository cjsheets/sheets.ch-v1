import Link from 'gatsby-link';
import * as React from 'react';

import { frontmatter_2, ImageSharp } from '../../../@types/graphql-types';
import { getMonthAbbreviation } from '../../utility/date';

import * as styles from './post-card.scss';

interface IPostCard extends React.HTMLProps<HTMLDivElement> {
  avatar: ImageSharp;
  excerpt: string;
  frontmatter: frontmatter_2;
  slug: string;
  timeToRead: number;
}

export const PostCard = (props: IPostCard) => {
  const tags = props.frontmatter.tags || [];
  const getFormattedDateString = () => {
    const date = new Date(props.frontmatter.createdDate);
    return `${date.getDate()}-${getMonthAbbreviation(date)}-${date.getFullYear()}`;
  };

  return (
    <div className={styles.postCardContainer}>
      <Link to={props.slug}>
        <div className={styles.postCardTitle}>
         {props.frontmatter.title}
        </div>
        <div className={styles.postCardDate}>
          {getFormattedDateString()} - {props.timeToRead} min read
        </div>
        <div className={styles.postCardExcerpt}>
          {props.excerpt}
        </div>
        <div>
          {tags.map((tag, i) =>
            <Link key={tag + i} to="/">{`#${tag} `}</Link>
          )}
        </div>
      </Link>
    </div>
  );
};

export default PostCard;