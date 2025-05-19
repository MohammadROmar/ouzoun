'use client';

import { useState } from 'react';

import { useRouter, usePathname } from '@/i18n/navigation';
import LocalesList from './locales-list';
import GlobeIcon from '@/assets/icons/globe';
import { type Locale } from '@/i18n/routing';

export default function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  function changeLocale(locale: Locale) {
    router.replace({ pathname }, { locale });
  }

  return (
    <>
      <div className="relative w-fit">
        <button
          className="flex cursor-pointer items-center justify-center"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <GlobeIcon className="size-5" />
        </button>

        {isOpen && (
          <LocalesList
            handleChange={changeLocale}
            aria-live="polite"
            className="bg-green absolute top-[calc(100%_+_0.5rem)] left-1/2 w-fit -translate-x-1/2 px-2 py-1 text-center text-white"
          />
        )}
      </div>
    </>
  );
}
