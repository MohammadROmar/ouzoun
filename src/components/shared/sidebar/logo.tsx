'use client';

import { useSidebarContext } from '@/store/sidebar';
import Logo from '../logo';

export default function SidebarLogo() {
  const { setIsOpen } = useSidebarContext();

  return <Logo onClick={() => setIsOpen(false)} />;
}
