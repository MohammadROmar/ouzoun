import HeaderWrapper from './wrapper';
import Logo from '../logo';
import Navigation from '@/components/navigation';
import LocaleSwitcher from '../../locale/locale-switcher';
import ThemeToggle from '../../theme/theme-toggle';
import HamburgerMenu from './hamburger-menu';
import type { NavigationLink } from '@/models/navigation-link';

type HeaderProps = { navigationLinks?: NavigationLink[] };

function Header({ navigationLinks }: HeaderProps) {
  return (
    <HeaderWrapper>
      <Logo />

      {navigationLinks && (
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
