import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

import { Link } from '../../i18n/navigation';
import type { NavigationLink } from '@/core/models/navigation-link';

type NavigationProps = {
  links: NavigationLink[];
  vertical?: boolean;
  onClick?(): void;
} & ComponentPropsWithoutRef<'nav'>;

function Navigation({ links, vertical, onClick, ...props }: NavigationProps) {
  return (
    <nav {...props}>
      <ul
        className={clsx(
          'flex gap-6 max-md:flex-wrap',
          vertical ? 'flex-col' : 'items-center',
        )}
      >
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.to} onClick={onClick}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
