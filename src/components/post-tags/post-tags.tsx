import React from 'react';
import { Link } from 'gatsby';
import toKebabCase from '../../utility/toKebabCase';

function PostTags({ tags }) {
  return (
    <div className="post-tag-container">
      {tags &&
        tags.map((tag) => (
          <Link key={tag} style={{ textDecoration: 'none' }} to={`/tags/${toKebabCase(tag)}`}>
            <button type="button">{tag}</button>
          </Link>
        ))}
    </div>
  );
}

export default PostTags;
