/* eslint-disable global-require */
import * as React from 'react';

interface ISvgIcon {
  icon: {
    src: any;
    width: number;
    height: number;
  };
  width?: number;
  height?: number;
  alt?: string;
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

export default function SvgIcon({ width: _width, height: _height, icon, alt }: ISvgIcon) {
  const width = _width || icon.width || 18;
  const height = _height || icon.height || 18;

  return (
    <div style={{ width, height }}>
      <img src={icon.src} width={width} height={height} alt={alt} />
    </div>
  );
}
