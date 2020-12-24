import * as React from 'react';

import { ImageSharp } from '../../../@types/graphql-types';
//import avatar from '../../../content/avatars/chadsheets.jpg';

interface IAuthorBio {
  avatar?: ImageSharp;
  authorName?: string;
  authorBio?: string;
}

export const AuthorBio = (props: IAuthorBio) => {
  return (
    (
      <div>
        <div>
          <div>
            <img />
          </div>
        </div>
        <div>
          <h3>{'Chad Sheets'}</h3>
          <p>{'Seattle-based software engineer, linux hobbiest'}</p>
        </div>
      </div>
    ) || null
  );
};

export default AuthorBio;
