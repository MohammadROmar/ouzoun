import { MetadataRoute } from 'next';

import { routing } from '@/i18n/routing';

export default function robots(): MetadataRoute.Robots {
  const allowedPaths = ['', '/sign-in', '/reset-password'];
  const disallowedPaths = [
    '/dashboard',
    '/assistants*',
    '/kits*',
    '/implants*',
    '/tools*',
  ];

  const localizedAllowedPathes = routing.locales.flatMap((locale) =>
    allowedPaths.map((path) => `/${locale}${path}`),
  );
  const localizedDisallowedPathes = routing.locales.flatMap((locale) =>
    disallowedPaths.map((path) => `/${locale}${path}`),
  );

  return {
    rules: [
      {
        userAgent: '*',
        allow: localizedAllowedPathes,
        disallow: localizedDisallowedPathes,
      },
    ],
  };
}
