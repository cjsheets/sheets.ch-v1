import * as React from 'react';

interface ISvgIcon {
  icon: string;
  width?: number;
  height?: number;
}

export const Icon: {
  github: string;
} = {
  github: require('../../../data/icons/github.svg')
};

export const SvgIcon = (props: ISvgIcon) => {
  const width = props.width || 18;
  const height = props.height || 18;

  return (
    <img
      width={props.width}
      height={props.height}
      src={props.icon}
    />
    );
};

export default SvgIcon;