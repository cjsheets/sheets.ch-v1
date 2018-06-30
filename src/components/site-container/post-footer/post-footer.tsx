import * as React from 'react';

import { ImageSharp } from '../../../@types/graphql-types';

import * as styles from './post-footer.module.scss';

interface IPostFooter {
  avatar?: ImageSharp;
  authorName?: string;
  authorBio?: string;
}

export const PostFooter = (props: IPostFooter) => {
  return props.authorBio && props.authorName && props.avatar && (
    <div className={styles.footerContainer}>
      <div className={styles.avatarContainer}>
        <div className={styles.avatarWrapper}>
          <img
            className={styles.avatar}
            src={props.avatar.responsiveResolution.src}
            srcSet={props.avatar.responsiveResolution.srcSet}
          />
        </div>
      </div>
      <div className={styles.authorBio}>
        <h3>{props.authorName}</h3>
        <p>{props.authorBio}</p>
      </div>
    </div>
  ) || null;
};

export default PostFooter;