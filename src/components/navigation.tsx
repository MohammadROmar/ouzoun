import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

import { Link } from '@/i18n/navigation';
import type { NavigationLink } from '@/models/navigation-link';

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

// 'use client';

// import clsx from 'clsx';
// import type { ComponentPropsWithoutRef } from 'react';

// import { Link } from '@/i18n/navigation';
// import type { NavigationLink } from '@/models/navigation-link';
// import { useSidebarContext } from '@/store/sidebar';

// type NavigationProps = {
//   links: NavigationLink[];
//   vertical?: boolean;
// } & ComponentPropsWithoutRef<'nav'>;

// function Navigation({ links, vertical, ...props }: NavigationProps) {
//   const { setIsOpen } = useSidebarContext();

//   return (
//     <nav {...props}>
//       <ul
//         className={clsx(
//           'flex gap-6 max-md:flex-wrap',
//           vertical ? 'flex-col' : 'items-center',
//         )}
//       >
//         {links.map((link) => (
//           <li key={link.label}>
//             <Link href={link.to} onClick={() => setIsOpen(false)}>
//               {link.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default Navigation;
