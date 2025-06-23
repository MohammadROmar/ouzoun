import { cookies } from 'next/headers';
import type { PropsWithChildren } from 'react';

import SidebarWrapper from './wrapper';
import Logo from './logo';
import CloseSidebarButton from './close-btn';
import NavigationList from './nav-list';
import LocaleSwitcher from '../../locale/locale-switcher';
import ThemeToggle from '../../theme/theme-toggle';
import type { NavigationLink } from '@/models/navigation-link';

type SidebarProps = { navigationLinks?: NavigationLink[] } & PropsWithChildren;

async function Sidebar({ navigationLinks, children }: SidebarProps) {
  const isAuthenticated = (await cookies()).get('access-token')?.value;

  return (
    <SidebarWrapper isAuthenticated={!!isAuthenticated}>
      <div className="max-md:spacing bg-bg-primary flex size-full min-h-screen cursor-default flex-col gap-6 overflow-y-auto py-4 max-md:justify-between max-md:pt-20 md:px-6">
        <div className="flex items-center justify-between max-md:hidden">
          <Logo />
          <CloseSidebarButton />
        </div>

        {navigationLinks && <NavigationList links={navigationLinks} />}

        {children}

        <div className="mb-8 flex items-center gap-6 self-center md:hidden">
          <LocaleSwitcher direction="top" />
          <ThemeToggle />
        </div>
      </div>
    </SidebarWrapper>
  );
}

export default Sidebar;
