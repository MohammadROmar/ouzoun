import Logo from '@/assets/icons/logo';
import { Locale } from '@/i18n/routing';
import { getLocale, getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function HeaderLogo() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();

  return (
    <Link href={`/${locale}`} className="flex items-center gap-2">
      <Logo className="size-5" />
      <p className="text-lg">{t('Metadata.Root.title')}</p>
    </Link>
  );
}
