import * as React from 'react';

import { ImageSharp } from '../../../@types/graphql-types';
import avatar from '../../../content/avatars/chadsheets.jpg';

import * as styles from './author-bio.module.scss';

interface IAuthorBio {
  avatar?: ImageSharp;
  authorName?: string;
  authorBio?: string;
}

export const AuthorBio = (props: IAuthorBio) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatarWrapper}>
          <img
            className={styles.avatar}
            src={avatar}
          />
        </div>
      </div>
      <div className={styles.authorBio}>
        <h3>{'Chad Sheets'}</h3>
        <p>{'Seattle-based software engineer, linux hobbiest'}</p>
      </div>
    </div>
  ) || null;
};

export default AuthorBio;