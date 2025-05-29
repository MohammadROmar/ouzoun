import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';

import Logo from './logo';
import { landingNavigation } from '@/data/navigation';
import type { Locale } from '@/i18n/routing';

export default async function Footer() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();

  const links = landingNavigation(locale, t);

  return (
    <footer className="spacing max-container border-gray flex flex-col border-t py-6">
      <div className="flex items-center gap-4">
        <Logo />
      </div>
      <p className="text-gray mt-2 max-w-lg text-sm">
        {t('metadata.root.description')}
      </p>

      <nav className="mt-4">
        <ul className="flex flex-wrap gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className="mt-4 self-center text-sm">
        <span>&copy; </span>
        <span className="text-green dark:text-green-light">
          {t('metadata.root.title')}
        </span>
        <span>{`. ${t('footer.rights')}`}</span>
      </p>
    </footer>
  );
}
