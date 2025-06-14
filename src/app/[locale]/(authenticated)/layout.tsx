import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import type { PropsWithChildren } from 'react';

import SidebarContextProvider from '@/store/sidebar';
import Header from '@/components/shared/header';
import Sidebar from '@/components/shared/sidebar';
import DashboardNavigation from '@/components/dashboard-navigation';
import LogoutButton from '@/components/logout-btn';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata.authenticated');

  return { title: t('title'), description: null };
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
      <main className="max-md:spacing max-md:pt-16 md:ml-64 md:pt-20 md:pl-4">
        {children}
      </main>
    </SidebarContextProvider>
  );
}
