'use client';

import { useTranslations } from 'next-intl';

import { Link, usePathname } from '@/i18n/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const t = useTranslations('navigation.dashboard');

  const segments = pathname.split('/').filter(Boolean);

  return (
    <ol className="flex flex-wrap">
      {segments.map((segment, i) => {
        const isLast = i === segments.length - 1;

        const href = `/${segments.slice(0, i + 1).join('/')}`;
        const label = t.has(segment) ? t(segment) : segment;

        return (
          <li key={segment} className="flex max-sm:text-sm">
            <Link href={href} className="underline underline-offset-2">
              {label}
            </Link>
            {!isLast && (
              <span aria-hidden className="px-3 sm:px-4">
                &gt;
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}
