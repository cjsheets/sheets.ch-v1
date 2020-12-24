import * as React from 'react';

interface ISvgIcon {
  icon: {
    src: any;
    width: number;
    height: number;
  };
  width?: number;
  height?: number;
  inline?: boolean;
  className?: string;
}

export const Icon = {
  debian: { src: require('../../../content/icons/logo-debian-100.svg'), width: 100, height: 100 },
  github: { src: require('../../../content/icons/github.svg'), width: 18, height: 18 },
  netlify: { src: require('../../../content/icons/netlify-logo.svg'), width: 100, height: 100 },
  nodejs: { src: require('../../../content/icons/nodejs-logo.svg'), width: 100, height: 100 },
  react: { src: require('../../../content/icons/react-logo.svg'), width: 100, height: 100 },
  sheets: { src: require('../../../content/icons/sheets-logo.svg'), width: 100, height: 100 },
  typescript: {
    src: require('../../../content/icons/typescript-logo.svg'),
    width: 100,
    height: 100,
  },
};

export const SvgIcon = (props: ISvgIcon) => {
  const width = props.width || props.icon.width || 18;
  const height = props.height || props.icon.height || 18;

  return (
    <div style={{ width, height }}>
      <img src={props.icon.src} width={props.width} height={props.height} />
    </div>
  );
};

export default SvgIcon;
