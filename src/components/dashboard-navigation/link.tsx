'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import { useSidebarContext } from '@/store/sidebar';

type NavLinkProps = { label: string; to: string } & PropsWithChildren;

function NavLink({ label, to, children }: NavLinkProps) {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useSidebarContext();

  const isActive = pathname.includes(to);

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
        onClick={isOpen ? () => setIsOpen(false) : undefined}
      >
        {children}
        <span className="text-lg">{label}</span>
      </Link>
    </li>
  );
}

export default NavLink;
