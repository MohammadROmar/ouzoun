import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import Providers from '@/components/providers';
import { routing, type LocaleParams } from '@/i18n/routing';
import { fontVariables } from '@/data/fonts';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata.root');

  return {
    title: { default: t('title'), template: `%s - ${t('title')}` },
    description: t('description'),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = LocaleParams & PropsWithChildren;

async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      dir={locale === 'en' ? 'ltr' : 'rtl'}
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className={`${fontVariables} ${
          locale === 'en' ? 'font-montserrat' : 'font-kufi'
        } bg-bg-secondary max-container selection:bg-green/75 relative antialiased selection:text-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default LocaleLayout;
