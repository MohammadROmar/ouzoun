import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import noContentImg from '@/assets/images/no-content.png';

async function NoContent() {
  const t = await getTranslations('no-content');

  return (
    <section className="flex h-full flex-col items-center justify-center text-center">
      <div className="relative aspect-square w-full max-w-md">
        <Image
          src={noContentImg}
          alt="A person stands in front of a large computer screen displaying a sad face and the text NO DATA."
          fill
          sizes="(max-width: 32rem) 100vw, 32rem"
          className="object-cover object-center"
        />
      </div>

      <h2 className="ltr:font-ubuntu mt-4 text-2xl max-md:text-center md:text-3xl">
        {t('title')}
      </h2>
      <p className="text-gray mt-2 max-w-md">{t('description')}</p>
    </section>
  );
}

export default NoContent;
