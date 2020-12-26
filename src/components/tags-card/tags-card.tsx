import { GatsbyLinkProps } from 'gatsby';
import * as React from 'react';
import { markdownRemarkGroupConnectionConnection } from '../../../@types/graphql-types';

interface ITagsdivProps extends React.HTMLProps<HTMLDivElement> {
  tags: markdownRemarkGroupConnectionConnection[];
  Link: React.ComponentClass<GatsbyLinkProps<any>>;
  tag?: string;
}

export default ({ tags, tag, Link }: ITagsdivProps) => (
  <div>
    <div>
      <div>Tags</div>
    </div>
    <div>
      <div>
        {tags.map((_tag) => {
          const isActive = _tag.fieldValue === tag;
          return (
            <div key={_tag.fieldValue}>
              <div>
                <Link to={`/post/tags/${_tag.fieldValue}/`}>
                  {_tag.fieldValue} ({_tag.totalCount}) {isActive}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);
