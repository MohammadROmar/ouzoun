'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import badToothImg from '@/assets/images/bad-tooth.png';

type ErrorProps = { message: string; reset?: () => void };

function Error({ message, reset }: ErrorProps) {
  const t = useTranslations('error-page');

  return (
    <section className="flex flex-col items-center justify-center gap-2">
      <div className="relative aspect-square w-full max-w-sm">
        <Image
          src={badToothImg}
          alt=""
          fill
          sizes="32rem"
          className="object-contain object-center"
        />
      </div>

      <h1 className="ltr:font-ubuntu text-green text-3xl md:text-4xl">
        {t('title')}
      </h1>
      <p className="text-gray text-xs">{t('subtitle')}</p>
      <p className="text-lg md:text-xl">
        {t.has(message) ? t(message) : t('unknow-error')}
      </p>

      <div className="flex gap-4">
        {reset && (
          <button onClick={() => reset()} className="button">
            {t('try-again')}
          </button>
        )}

        <Link href="/" className="button flex">
          {t('back-home')}
        </Link>
      </div>
    </section>
  );
}

export function ErrorText({ message }: ErrorProps) {
  const t = useTranslations('error-page');

  return (
    <p className="error-text flex">
      {t.has(message) ? t(message) : t('unknow-error')}
    </p>
  );
}

export default Error;
