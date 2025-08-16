import type { PropsWithChildren } from 'react';

import SidebarContextProvider from '@/store/sidebar';
import Header from '@/components/shared/header';
import Sidebar from '@/components/shared/sidebar';
import Footer from '@/components/shared/footer';

type LayoutProps = {
  hasFooter?: boolean;
} & PropsWithChildren;

async function Layout({ hasFooter = true, children }: LayoutProps) {
  return (
    <>
      <SidebarContextProvider>
        <Header />
        <Sidebar />
      </SidebarContextProvider>

      <main>{children}</main>

      {hasFooter && <Footer />}
    </>
  );
}

export default Layout;
