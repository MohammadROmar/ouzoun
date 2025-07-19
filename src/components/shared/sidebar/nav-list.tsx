'use client';

import Navigation from '@/components/navigation';
import { NavigationLink } from '@/models/navigation-link';
import { useSidebarContext } from '@/store/sidebar';

type NavigationListProps = { links: NavigationLink[] };

export default function NavigationList({ links }: NavigationListProps) {
  const { setIsOpen } = useSidebarContext();

  return (
    <Navigation
      links={links}
      vertical
      onClick={() => setIsOpen(false)}
      className="text-xl"
    />
  );
}
