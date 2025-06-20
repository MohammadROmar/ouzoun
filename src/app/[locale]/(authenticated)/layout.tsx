import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import type { PropsWithChildren } from 'react';

import SidebarContextProvider from '@/store/sidebar';
import Header from '@/components/shared/header';
import Sidebar from '@/components/shared/sidebar';
import DashboardNavigation from '@/components/dashboard/navigation/index';
import LogoutButton from '@/components/logout-btn';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');

  return {
    title: {
      default: t('authenticated.title'),
      template: `%s - ${t('root.title')}`,
    },
    description: null,
  };
}

export default async function AuthLayout({ children }: PropsWithChildren) {
  const isAuthenticated = (await cookies()).get('access-token')?.value;

  if (!isAuthenticated) {
    redirect('/');
  }

  return (
    <SidebarContextProvider>
      <Header />
      <Sidebar>
        <DashboardNavigation />
        <LogoutButton />
      </Sidebar>
      <main className="max-md:spacing min-h-screen max-md:pt-18 md:p-6 md:pt-20 md:ltr:ml-64 md:rtl:mr-64">
        {children}
      </main>
    </SidebarContextProvider>
  );
}
