import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';

import SectionTitle from '@/components/shared/section-title';
import Pattern1Icon from '@/assets/icons/patterns/pattern1';
import Pattern2Icon from '@/assets/icons/patterns/pattern2';
import DownloadIcon from '@/assets/icons/download';
import mobilesimg from '@/assets/images/mobiles.png';
import type { Locale } from '@/i18n/routing';

export default async function MobileApp() {
  const t = await getTranslations('landing-page.mobile');
  const locale = (await getLocale()) as Locale;

  return (
    <section
      id="mobile-app"
      className="max-container spacing relative flex justify-between gap-6 max-lg:flex-col-reverse lg:items-center lg:gap-12"
    >
      <div className="relative aspect-square flex-1 self-center max-lg:w-full max-lg:max-w-lg">
        <Image src={mobilesimg} alt="A preview of our mobile app." />

        <Pattern1Icon className="text-green dark:text-green-light absolute inset-0 -z-10 aspect-square" />
      </div>

      <div className="relative flex-1">
        <div className="backdrop-blur-[2px]">
          <SectionTitle
            title={t('title')}
            subtitle={t('subtitle')}
            locale={locale}
            align="text-start"
          />

          <p className="text-gray mt-6 text-sm">{t('body')}</p>

          <button className="button mt-6 flex items-center gap-3 text-lg font-medium md:text-xl">
            <p>{t('download')}</p>
            <DownloadIcon className="size-6" />
          </button>
        </div>

        <Pattern2Icon className="text-green dark:text-green-light absolute -top-[20%] -left-[0.5%] -z-10 size-28" />
        <Pattern2Icon className="text-green dark:text-green-light absolute right-[5%] -bottom-[10%] -z-10 size-32 max-md:hidden" />
      </div>
    </section>
  );
}
