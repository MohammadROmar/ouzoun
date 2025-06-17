import { getTranslations } from 'next-intl/server';

import StartButton from './start-btn';
import HeroImage from './image';

export default async function Hero() {
  const t = await getTranslations('landing-page.hero');

  return (
    <section className="spacing flex min-h-screen items-center gap-4 pt-24 max-md:flex-col">
      <div className="flex flex-1 flex-col gap-4">
        <h1 className="ltr:font-ubuntu max-w-xl text-3xl leading-10 font-medium lg:text-5xl lg:leading-14">
          <span className="text-green block">{t('title1')}</span>
          <span className="block">{t('title2')}</span>
        </h1>

        <p className="text-gray max-w-lg text-lg md:text-xl">{t('body')}</p>

        <StartButton label={t('start')} />
      </div>

      <HeroImage />
    </section>
  );
}
