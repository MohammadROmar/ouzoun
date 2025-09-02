import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import type { PropsWithChildren } from 'react';

import RefreshTokens from '@/features/auth/components/refresh-tokens';
import SidebarContextProvider from '@/shared/store/sidebar';
import Header from '@/shared/components/header';
import Sidebar from '@/shared/components/sidebar';
import { LocaleParams } from '@/i18n/routing';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');

  return {
    title: {
      default: t('authenticated.title'),
      template: `%s - ${t('root.title')}`,
    },
    robots: { index: false, follow: false },
  };
}

type AuthLayoutProps = LocaleParams & PropsWithChildren;

async function AuthLayout({ params, children }: AuthLayoutProps) {
  const isAuthenticated = (await cookies()).get('access-token')?.value;

  if (!isAuthenticated) {
    const { locale } = await params;

    redirect(`/${locale}`);
  }

  return (
    <>
      <RefreshTokens />

      <SidebarContextProvider>
        <Header />
        <Sidebar />
        <main className="max-md:spacing min-h-screen max-md:pt-18 md:p-6 md:pt-20 md:ltr:ml-64 md:rtl:mr-64">
          {children}
        </main>
      </SidebarContextProvider>
    </>
  );
}

export default AuthLayout;
