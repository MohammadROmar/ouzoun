import { cookies } from 'next/headers';

import HeaderWrapper from './wrapper';
import Logo from '../logo';
import Navigation from '@/components/navigation';
import LocaleSwitcher from '../../locale/locale-switcher';
import ThemeToggle from '../../theme/theme-toggle';
import HamburgerMenu from './hamburger-menu';
import { landingNavigation } from '@/data/navigation/landing';

async function Header() {
  const isAuthenticated = (await cookies()).get('access-token')?.value;
  const navigationLinks = await landingNavigation();

  return (
    <HeaderWrapper>
      <Logo />

      {!isAuthenticated && (
        <Navigation links={navigationLinks} className="max-md:hidden" />
      )}

      <div className="flex items-center gap-6 max-md:hidden">
        <LocaleSwitcher />
        <ThemeToggle />
      </div>

      <HamburgerMenu />
    </HeaderWrapper>
  );
}

export default Header;
