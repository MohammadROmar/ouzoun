import Logo from '../logo';
import Navigation from '@/components/navigation';
import LocaleSwitcher from '../../locale/locale-switcher';
import ThemeToggle from '../../theme/theme-toggle';
import HamburgerMenu from './hamburger-menu';
import type { NavigationLink } from '@/models/navigation-link';

type HeaderProps = { navigationLinks?: NavigationLink[] };

async function Header({ navigationLinks }: HeaderProps) {
  return (
    <header className="spacing max-container absolute top-0 right-0 left-0 flex items-center justify-between py-4">
      <Logo />

      {navigationLinks && (
        <Navigation links={navigationLinks} className="max-md:hidden" />
      )}

      <div className="flex items-center gap-6 max-md:hidden">
        <LocaleSwitcher />
        <ThemeToggle />
      </div>

      <HamburgerMenu />
    </header>
  );
}

export default Header;
