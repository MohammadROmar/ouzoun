import Image, { type ImageProps } from 'next/image';

export default function LandingImage(props: ImageProps) {
  return (
    <div className="relative aspect-square flex-1 self-center max-lg:w-full max-lg:max-w-lg">
      <Image
        fill
        sizes="(max-width: 48rem) 100vw, (max-width: 1440px) 50vw, 720px"
        className="object-cover object-center"
        {...props}
      />
    </div>
  );
}
