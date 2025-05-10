import ThemeToggle from '../theme/theme-toggle';
import LocalSwitcher from './locale-switcher';

export default function Header() {
  return (
    <header>
      <LocalSwitcher />
      <ThemeToggle />
    </header>
  );
}
