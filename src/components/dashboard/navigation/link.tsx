'use client';

import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import { useSidebarContext } from '@/store/sidebar';
import { Link, usePathname } from '@/i18n/navigation';

type NavLinkProps = { label: string; to: string } & PropsWithChildren;

function NavLink({ label, to, children }: NavLinkProps) {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useSidebarContext();

  const segments = pathname.split('/').filter(Boolean);
  const isActive = to.includes(segments[0]);

  return (
    <li
      className={clsx(
        'group rounded-xl transition-colors',
        isActive
          ? 'bg-green text-white'
          : 'hover:bg-green-light hover:text-[#222]',
      )}
    >
      <Link
        href={to}
        className="flex items-center gap-4 p-2 transition-transform group-hover:scale-95"
        onNavigate={isOpen ? () => setIsOpen(false) : undefined}
      >
        {children && <span>{children}</span>}
        <span className="text-lg">{label}</span>
      </Link>
    </li>
  );
}

export default NavLink;
