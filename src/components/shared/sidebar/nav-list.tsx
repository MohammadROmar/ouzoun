'use client';

import { useSidebarContext } from '@/store/theme-provider';
import Navigation from '@/components/navigation';
import type { NavigationLink } from '@/models/navigation-link';

type NavigationListProps = { links: NavigationLink[] };

export default function NavigationList({ links }: NavigationListProps) {
  const { setIsOpen } = useSidebarContext();

  return (
    <Navigation
      links={links}
      vertical
      className="text-xl"
      onClick={() => setIsOpen(false)}
    />
  );
}
