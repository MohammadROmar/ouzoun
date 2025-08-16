'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import Logo from '@/components/shared/logo';
import LocaleSwitcher from '@/components/locale/locale-switcher';
import ThemeToggle from '@/components/theme/theme-toggle';
import badToothImg from '@/assets/images/bad-tooth.png';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

function Error({ error, reset }: ErrorProps) {
  const t = useTranslations('error-page');

  return (
    <>
      <header className="spacing max-container fixed top-0 right-0 left-0 z-50 flex items-center justify-between py-4">
        <Logo />

        <div className="flex items-center gap-6 max-sm:gap-4">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </header>

      <main className="m-auto flex h-screen max-w-2xl flex-col items-center justify-center gap-4 overflow-x-hidden p-4 text-center">
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
          {t.has(error.message) ? t(error.message) : t('unknow-error')}
        </p>

        <div className="flex gap-4">
          <button onClick={() => reset()} className="button">
            {t('try-again')}
          </button>

          <Link href="/" className="button flex">
            {t('back-home')}
          </Link>
        </div>
      </main>
    </>
  );
}

export default Error;
