import Link from 'gatsby-link';
import * as React from 'react';

interface IPostCard extends React.HTMLProps<HTMLDivElement> {
  excerpt: string;
  frontmatter: any;
  slug: string;
  timeToRead: number;
}

export const PostCard = ({ slug, frontmatter, timeToRead, excerpt }: IPostCard) => {
  const tags = frontmatter.tags || [];
  const getFormattedDateString = () => {
    const date = new Date(frontmatter.createdDate);
    return `${date.getDate()}-${date}-${date.getFullYear()}`;
  };

  return (
    <div>
      <Link to={slug}>
        <div>{frontmatter.title}</div>
        <div>
          {getFormattedDateString()} - {timeToRead} min read
        </div>
        <div>{excerpt}</div>
        <div>
          {tags.map((tag) => (
            <Link key={tag} to="/">{`#${tag} `}</Link>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
