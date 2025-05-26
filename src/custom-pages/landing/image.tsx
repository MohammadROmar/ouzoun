import Image, { StaticImageData } from 'next/image';
import { getLocale } from 'next-intl/server';
import clsx from 'clsx';

import PatternIcon from '@/assets/icons/patterns/pattern2';
import type { Locale } from '@/i18n/routing';

async function LandingImage({ image }: { image: StaticImageData }) {
  const locale = (await getLocale()) as Locale;

  return (
    <div className="relative aspect-square flex-1 self-center max-lg:w-full max-lg:max-w-lg">
      <div
        className={clsx(
          'bg-green relative size-full overflow-hidden',
          locale === 'en'
            ? 'rounded-tr-[7.5rem] rounded-bl-[7.5rem]'
            : 'rounded-tl-[7.5rem] rounded-br-[7.5rem]',
        )}
      >
        <Image
          src={image}
          alt="An image of a dentist and a patient."
          fill
          sizes="(max-width: 48rem) 100vw, (max-width: 1440px) 50vw, 720px"
          className="object-cover object-center"
        />
      </div>

      <PatternIcon
        className={clsx(
          'text-green-light absolute bottom-0 -z-10 size-32 translate-y-1/2',
          locale === 'en' ? 'right-4' : 'left-4',
        )}
      />
    </div>
  );
}

export default LandingImage;
