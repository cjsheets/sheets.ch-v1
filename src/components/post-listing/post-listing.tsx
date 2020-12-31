import * as React from 'react';
import { Link } from 'gatsby';
import { MarkdownRemarkEdge } from '../../graphql-types';
import { PostContainer, PostDate, PostTitle } from './post-listing.style';

interface IPostListing extends React.HTMLProps<HTMLDivElement> {
  postEdge: MarkdownRemarkEdge;
  condensed?: boolean;
}

export default function PostListing({ postEdge, condensed, style }: IPostListing) {
  const { frontmatter, fields, excerpt, timeToRead } = postEdge.node;
  const postDate = new Date(frontmatter.date);
  const formattedDate = postDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (condensed) {
    return <div />;
  }

  return (
    <PostContainer style={style}>
      <Link to={fields.slug}>
        <PostTitle>{frontmatter.title}</PostTitle>
      </Link>
      <PostDate>{`By ${frontmatter.author} on ${formattedDate}`}</PostDate>
      <p>{excerpt}</p>
      <div style={{ marginTop: 20 }}>
        <Link to={fields.slug}>Read More &rsaquo;</Link>
      </div>
    </PostContainer>
  );
}
