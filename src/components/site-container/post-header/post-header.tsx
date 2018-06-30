import * as React from 'react';

interface IPostHeader {
  title?: string;
}

export const PostHeader = ({title}: IPostHeader) => {
  return title && (
    <div>
      <h1>{title}</h1>
    </div>
  ) || null;
};

export default PostHeader;