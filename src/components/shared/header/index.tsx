import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';

import Logo from '../logo';
import LocaleSwitcher from '../../locale/locale-switcher';
import ThemeToggle from '../../theme/theme-toggle';
import HamburgerMenu from './hamburger-menu';
import { landingNavigation } from '@/data/navigation';
import type { Locale } from '@/i18n/routing';

export default async function Header() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();

  const links = landingNavigation(locale, t);

  return (
    <header className="spacing max-container absolute top-0 right-0 left-0 flex items-center justify-between py-4">
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

      <div className="flex items-center gap-6 max-md:hidden">
        <LocaleSwitcher />
        <ThemeToggle />
      </div>

      <HamburgerMenu />
    </header>
  );
}
