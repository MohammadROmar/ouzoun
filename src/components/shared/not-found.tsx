import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

import { Link } from '@/i18n/navigation';
import notFoundImg from '@/assets/images/404.png';

async function NotFoundPageContent(props: ComponentPropsWithoutRef<'section'>) {
  const t = await getTranslations('not-found-page');

  return (
    <section
      {...props}
      className={clsx(
        'max-container flex min-h-screen flex-col items-center justify-center gap-2 text-center max-md:pt-18 md:pt-20',
        props.className,
      )}
    >
      <div className="relative aspect-square w-full max-w-sm" aria-hidden>
        <Image
          src={notFoundImg}
          alt="A image of a sad tooth."
          priority
          fill
          sizes="(max-width: 48rem) 100vw, 50vw"
          className="object-contain"
        />
      </div>

      <h1 className="text-green-light ltr:font-ubuntu text-4xl font-medium max-sm:text-3xl">
        {t('title')}
      </h1>
      <h2 className="text-gray">{t('subtitle')}</h2>
      <Link href="/" className="button mt-4 sm:text-xl">
        {t('back-to-home')}
      </Link>
    </section>
  );
}

export default NotFoundPageContent;
