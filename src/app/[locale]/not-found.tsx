import Link from 'next/link';
import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';

import Layout from '@/custom-pages/layout';
import sadToothImg from '@/assets/images/sad-tooth.png';

export default async function NotFoundPage() {
  const locale = await getLocale();
  const t = await getTranslations('not-found-page');

  return (
    <Layout hasFooter={false}>
      <section className="max-container spacing flex min-h-screen flex-col items-center justify-center gap-2 text-center">
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
        <Link href={`/${locale}`} className="button mt-4 sm:text-xl">
          {t('back-to-home')}
        </Link>
      </section>
    </Layout>
  );
}
