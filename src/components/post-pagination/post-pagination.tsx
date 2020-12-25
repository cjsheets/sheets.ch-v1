import Link, { GatsbyLinkProps } from 'gatsby-link';
import { times } from 'lodash';
import * as React from 'react';

interface IPostPaginationProps extends React.HTMLProps<HTMLDivElement> {
  pathname: string;
  Link: React.ComponentClass<GatsbyLinkProps>;
  pageCount: number;
}

export const PostPagination = (props: IPostPaginationProps) => {
  if (props.pageCount === 1) {
    return null;
  }
  const activeItem = props.pathname.startsWith('/post/page/') ? props.pathname.split('/')[3] : '1';

  return (
    <div>
      {times(props.pageCount, (index) => {
        const pageIndex = (index + 1).toString();

        const rangeStep = props.pageCount < 10 ? 5 : 3;
        const isInRange =
          +pageIndex - rangeStep < +activeItem && +pageIndex + rangeStep > +activeItem;
        const isLastPage = +pageIndex === props.pageCount;
        const isFirstPage = +pageIndex === 1;
        if (isInRange || isFirstPage || isLastPage) {
          return (
            <Link key={pageIndex} style={{ cursor: 'pointer' }} to={`/post/page/${pageIndex}/`} />
          );
        } 
          return +pageIndex === props.pageCount - 1 || +pageIndex === 2 ? (
            <div key={pageIndex}>...</div>
          ) : null;
        
      })}
    </div>
  );
};

export default PostPagination;
