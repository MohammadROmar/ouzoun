import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import localFont from 'next/font/local';
import type { PropsWithChildren } from 'react';
import { hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import Providers from '@/components/providers';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { routing, type Locale } from '@/i18n/routing';

const montserrat = localFont({
  preload: true,
  variable: '--font-montserrat',
  src: '../../assets/fonts/Montserrat-Variablet.ttf',
});
const ubuntuBold = localFont({
  preload: true,
  variable: '--font-ubuntu-bold',
  src: '../../assets/fonts/Ubuntu-Bold.ttf',
});
const notoKufiArabic = localFont({
  preload: true,
  variable: '--font-kufi',
  src: '../../assets/fonts/NotoKufiArabic-Variable.ttf',
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('MetaData.Root');

  return { title: t('title'), description: t('description') };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Params = { params: Promise<{ locale: Locale }> };
type LocaleLayoutProps = Params & PropsWithChildren;

async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${ubuntuBold.variable} ${
          notoKufiArabic.variable
        } ${
          locale === 'en' ? 'font-ubuntu-bold' : 'font-kufi'
        } antialiased bg-beige dark:bg-[#333]`}
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
