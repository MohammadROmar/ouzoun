import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';

import SidebarWrapper from './wrapper';
import Logo from '../logo';
import LocaleSwitcher from '../../locale/locale-switcher';
import CloseSidebarButton from './close-btn';
import ThemeToggle from '../../theme/theme-toggle';
import { landingNavigation } from '@/data/navigation';
import type { Locale } from '@/i18n/routing';

export default async function Sidebar() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations();

  const links = landingNavigation(locale, t);

  return (
    <SidebarWrapper>
      <div className="spacing bg-background flex size-full cursor-default flex-col justify-between gap-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <CloseSidebarButton />
        </div>

        <nav>
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.to} className="text-xl">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6 self-center">
          <LocaleSwitcher direction="top" />
          <ThemeToggle />
        </div>
      </div>
    </SidebarWrapper>
  );
}
