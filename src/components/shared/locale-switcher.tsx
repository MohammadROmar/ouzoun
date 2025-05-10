'use client';

import { ChangeEvent } from 'react';
import { useLocale } from 'next-intl';

import { routing, type Locale } from '@/i18n/routing';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function LocalSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const locale = useLocale();

  function changeLocale(event: ChangeEvent<HTMLSelectElement>) {
    const newLocal = event.currentTarget.value as Locale;

    router.replace({ pathname }, { locale: newLocal });
  }

  return (
    <select defaultValue={locale} onChange={changeLocale}>
      {routing.locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </select>
  );
}
