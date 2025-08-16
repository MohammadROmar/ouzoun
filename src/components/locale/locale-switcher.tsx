'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatePresence } from 'motion/react';
import clsx from 'clsx';

import { useRouter, usePathname } from '@/i18n/navigation';
import LocalesList from './locales-list';
import GlobeIcon from '@/assets/icons/globe';
import type { Locale } from '@/i18n/routing';

type LocaleSwitcherProps = {
  direction?: 'top' | 'bottom';
};

function LocaleSwitcher({ direction = 'bottom' }: LocaleSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLButtonElement>(null);

  const router = useRouter();
  const pathname = usePathname();

  const t = useTranslations('accessibility');

  function changeLocale(locale: Locale) {
    router.replace({ pathname }, { locale });
  }

  return (
    <>
      <div className="relative w-fit">
        <button
          ref={rootRef}
          onClick={() => setIsOpen((prev) => !prev)}
          title={t('language')}
          aria-label={t('language')}
          aria-controls="languages-list"
          aria-expanded={isOpen}
          className="flex cursor-pointer items-center justify-center"
        >
          <GlobeIcon className="size-7 md:size-5" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <LocalesList
              id="languages-list"
              handleChange={changeLocale}
              close={() => setIsOpen(false)}
              rootRef={rootRef}
              className={clsx(
                'bg-green absolute left-1/2 w-fit -translate-x-1/2 divide-y divide-white/50 rounded-lg px-2 py-0.5 text-center text-white',
                direction === 'bottom'
                  ? 'top-[calc(100%_+_0.5rem)]'
                  : 'bottom-[calc(100%_+_0.5rem)]',
              )}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default LocaleSwitcher;
