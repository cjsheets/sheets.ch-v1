import * as React from 'react';
import Circle from './icon-circle.style';

interface IIconCircle extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

export default function IconCircle({ children, style }: IIconCircle) {
  return <Circle style={style}>{children}</Circle>;
}
