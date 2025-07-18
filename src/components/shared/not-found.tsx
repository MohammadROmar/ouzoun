import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import clsx from 'clsx';

import { Link } from '@/i18n/navigation';
import sadToothImg from '@/assets/images/sad-tooth.png';
import { ComponentPropsWithoutRef } from 'react';

async function NotFoundPageContent(props: ComponentPropsWithoutRef<'section'>) {
  const t = await getTranslations('not-found-page');

  return (
    <section
      {...props}
      className={clsx(
        'max-container spacing flex min-h-screen flex-col items-center justify-center gap-2 text-center',
        props.className,
      )}
    >
      <p
        className="font-montserrat grid grid-cols-3 text-[45vmin] leading-none"
        aria-hidden
      >
        <span>4</span>
        <span className="relative">
          <Image
            src={sadToothImg}
            alt="A image of a sad tooth."
            fill
            sizes="33.33vw"
            className="object-contain"
          />
        </span>
        <span>4</span>
      </p>

      <h1 className="text-green-light ltr:font-ubuntu text-6xl font-medium max-sm:text-4xl">
        {t('title')}
      </h1>
      <h2 className="text-2xl max-sm:text-xl">{t('subtitle')}</h2>
      <Link href="/" className="button mt-4 sm:text-xl">
        {t('back-to-home')}
      </Link>
    </section>
  );
}

export default NotFoundPageContent;
