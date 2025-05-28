import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { PropsWithChildren } from 'react';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import Providers from '@/components/providers';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { routing, type LocaleParams } from '@/i18n/routing';
import { fontVariables } from '@/data/fonts';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata.root');

  return { title: t('title'), description: t('description') };
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
        } bg-background max-container selection:bg-green/75 antialiased selection:text-white`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export default LocaleLayout;
