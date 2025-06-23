import { LocaleParams } from '@/i18n/routing';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { PropsWithChildren } from 'react';

type NotAuthLayoutProps = LocaleParams & PropsWithChildren;

async function NotAuthLayout({ params, children }: NotAuthLayoutProps) {
  const isAuthenticated = (await cookies()).get('access-token')?.value;

  if (isAuthenticated) {
    const { locale } = await params;

    redirect(`/${locale}/dashboard`);
  }

  return children;
}

export default NotAuthLayout;
