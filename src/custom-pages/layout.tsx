import type { PropsWithChildren } from 'react';

import SidebarContextProvider from '@/store/sidebar';
import Header from '@/components/shared/header';
import Sidebar from '@/components/shared/sidebar';
import Footer from '@/components/shared/footer';

type LayoutProps = {
  hasHeader?: boolean;
  hasFooter?: boolean;
} & PropsWithChildren;

export default async function Layout({
  hasHeader = true,
  hasFooter = true,
  children,
}: LayoutProps) {
  return (
    <>
      {hasHeader && (
        <SidebarContextProvider>
          <Header />
          <Sidebar />
        </SidebarContextProvider>
      )}

      <main>{children}</main>

      {hasFooter && <Footer />}
    </>
  );
}
