import { GatsbyLinkProps } from 'gatsby-link';
import * as React from 'react';
import { markdownRemarkGroupConnectionConnection } from '../../types/graphql-types';

interface ITagsdivProps extends React.HTMLProps<HTMLDivElement> {
  tags: markdownRemarkGroupConnectionConnection[];
  Link: React.ComponentClass<GatsbyLinkProps>;
  tag?: string;
}

export default (props: ITagsdivProps) => {
  return (
    <div>
      <div>
        <div>
          Tags
        </div>
      </div>
      <div>
        <div>
          {props.tags.map((tag) => {
            const isActive = tag.fieldValue === props.tag;
            const activeStyle = {
              fontWeight: '700'
            };
            return (
              <div key={tag.fieldValue}>
                <div>
                  <props.Link to={`/post/tags/${tag.fieldValue}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                  </props.Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
