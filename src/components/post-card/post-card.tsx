import Link from 'gatsby-link';
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
  const tags = props.frontmatter.tags || [];
  console.log(props.frontmatter);
  const getMonthAbbreviation = (date: Date) => {
    const monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthAbbreviations[date.getMonth()];
  };

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
        {props.excerpt}
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