import { GatsbyLinkProps } from 'gatsby-link';
import { times } from 'lodash';
import * as React from 'react';
import { Menu } from 'semantic-ui-react-cjs';

interface IPostPaginationProps extends React.HTMLProps<HTMLDivElement> {
  pathname: string;
  Link: React.ComponentClass<GatsbyLinkProps>;
  pageCount: number;
}

export const PostPagination = (props: IPostPaginationProps) => {
  if (props.pageCount === 1) { return null; }
  const activeItem = props.pathname.startsWith('/post/page/')
    ? props.pathname.split('/')[3]
    : '1';

  return (
    <Menu pagination>
      {times(props.pageCount, (index) => {
        const pageIndex = (index + 1).toString();

        const rangeStep = props.pageCount < 10 ? 5 : 3;
        const isInRange = (+pageIndex - rangeStep < +activeItem && +pageIndex + rangeStep > +activeItem);
        const isLastPage = (+pageIndex === props.pageCount);
        const isFirstPage = (+pageIndex === 1);
        if (isInRange || isFirstPage || isLastPage) {
          return (
            <Menu.Item
              key={pageIndex}
              style={{ cursor: 'pointer' }}
              as={props.Link}
              to={`/post/page/${pageIndex}/`}
              name={pageIndex}
              active={activeItem === pageIndex}
            />
          );
        } else {
          return (+pageIndex === props.pageCount - 1 || +pageIndex === 2)
            ? <Menu.Item key={pageIndex} disabled>...</Menu.Item>
            : null;
        }
      })}
    </Menu>
  );
};

export default PostPagination;