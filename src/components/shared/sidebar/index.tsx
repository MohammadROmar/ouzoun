import SidebarWrapper from './wrappers';
import Logo from './logo';
import CloseSidebarButton from './close-btn';
import NavigationList from './nav-list';
import LocaleSwitcher from '../../locale/locale-switcher';
import ThemeToggle from '../../theme/theme-toggle';
import type { NavigationLink } from '@/models/navigation-link';

type SidebarProps = { navigationLinks: NavigationLink[] };

export default function Sidebar({ navigationLinks }: SidebarProps) {
  return (
    <SidebarWrapper>
      <div className="spacing bg-background flex size-full cursor-default flex-col justify-between gap-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <CloseSidebarButton />
        </div>

        <NavigationList links={navigationLinks} />

        <div className="flex items-center gap-6 self-center">
          <LocaleSwitcher direction="top" />
          <ThemeToggle />
        </div>
      </div>
    </SidebarWrapper>
  );
}
