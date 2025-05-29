'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

import SunIcon from '@/assets/icons/sun';
import MoonIcon from '@/assets/icons/moon';
import LoadingSpinner from '@/components/shared/loading-spinner';

export default function ThemeToggle() {
  const [didMount, setDidMount] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const t = useTranslations('accessibility');

  const isDark = resolvedTheme === 'dark';

  useEffect(() => setDidMount(true), []);

  if (!didMount) return <LoadingSpinner className="size-5 animate-spin" />;

  function handleThemeChange() {
    setTheme(isDark ? 'light' : 'dark');
  }

  return (
    <button
      onClick={handleThemeChange}
      aria-label={t(isDark ? 'theme.light' : 'theme.dark')}
      title={t(isDark ? 'theme.light' : 'theme.dark')}
      className={clsx(
        'flex cursor-pointer items-center justify-center transition-transform duration-300',
        isDark ? 'rotate-180' : 'rotate-90',
      )}
    >
      {isDark ? (
        <SunIcon className="size-7 md:size-5" />
      ) : (
        <MoonIcon className="size-7 -rotate-90 md:size-5" />
      )}
    </button>
  );
}
