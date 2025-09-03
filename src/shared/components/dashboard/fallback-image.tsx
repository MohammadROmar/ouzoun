'use client';

import Image, { ImageProps, StaticImageData } from 'next/image';
import { useState } from 'react';

type FallbackImageProps = {
  fallbackSrc: StaticImageData | string;
} & ImageProps;

function FallbackImage({
  src,
  fallbackSrc,
  alt,
  ...props
}: FallbackImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imageSrc}
      alt={alt}
      onError={() => setImageSrc(fallbackSrc)}
      unoptimized
    />
  );
}

export default FallbackImage;
