import Link from 'gatsby-link';
import { times } from 'lodash';
import * as React from 'react';

interface IPostPaginationProps extends React.HTMLProps<HTMLDivElement> {
  pathname: string;
  pageCount: number;
}

export const PostPagination = ({ pageCount, pathname }: IPostPaginationProps) => {
  if (pageCount === 1) {
    return null;
  }
  const activeItem = pathname.startsWith('/post/page/') ? pathname.split('/')[3] : '1';

  return (
    <div>
      {times(pageCount, (index) => {
        const pageIndex = (index + 1).toString();

        const rangeStep = pageCount < 10 ? 5 : 3;
        const isInRange =
          +pageIndex - rangeStep < +activeItem && +pageIndex + rangeStep > +activeItem;
        const isLastPage = +pageIndex === pageCount;
        const isFirstPage = +pageIndex === 1;
        if (isInRange || isFirstPage || isLastPage) {
          return (
            <Link key={pageIndex} style={{ cursor: 'pointer' }} to={`/post/page/${pageIndex}/`} />
          );
        }
        return +pageIndex === pageCount - 1 || +pageIndex === 2 ? (
          <div key={pageIndex}>...</div>
        ) : null;
      })}
    </div>
  );
};

export default PostPagination;
