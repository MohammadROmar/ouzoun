import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';

import LocaleSwitcher from './locale-switcher';
import ThemeToggle from '../../theme/theme-toggle';
import { landingNavigation } from '@/data/navigation';
import type { Locale } from '@/i18n/routing';
import Logo from './logo';

export default async function Header() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();

  const links = landingNavigation(locale, t);

  return (
    <header className="spacing absolute top-0 right-0 left-0 flex items-center justify-between py-4">
      <Logo />

      <nav className="max-md:hidden">
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-6">
        <LocaleSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
