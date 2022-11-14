import React from 'react';
import type { ImageProps } from 'next/image';
import NextImage from 'next/image';

type Props = ImageProps & { responsive?: boolean };

const Image: React.FC<Props> = ({ responsive, ...props }: Props) => {
  if (responsive) {
    props.width = props.width ?? 1000;
    props.height = props.height ?? 1000;
    props.style = { maxWidth: '100%', height: 'auto', ...props.style };
  }
  return <NextImage {...props} />;
};

export default Image;
