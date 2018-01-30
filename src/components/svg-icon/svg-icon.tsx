import * as React from 'react';

import * as styles from './svg-icon.scss';

interface ISvgIcon {
  icon: string;
  width?: number;
  height?: number;
  inline?: boolean;
  className?: string;
}

export const Icon: {
  github: string;
  sheets: string;
} = {
  github: require('../../../data/icons/github.svg'),
  sheets: require('../../../data/icons/sheets-logo.svg')
};

export const SvgIcon = (props: ISvgIcon) => {
  const width = props.width || 18;
  const height = props.height || 18;
  const style = props.inline ? {display: 'inline-block'} : {display: 'block'};

  return (
    <div
      style={{width, height}}
      className={[
        props.inline && styles.inline
      ].join(' ')}
    >
      <img
        src={props.icon}
        width={props.width}
        height={props.height}
        className={[
          styles.svgImg,
          props.className,
          props.inline && styles.inline
        ].join(' ')}
      />
    </div>
    );
};

export default SvgIcon;