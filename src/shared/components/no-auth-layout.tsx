import type { PropsWithChildren } from 'react';

import SidebarContextProvider from '../store/sidebar';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';

type LayoutProps = {
  hasFooter?: boolean;
} & PropsWithChildren;

async function NoAuthLayout({ hasFooter = true, children }: LayoutProps) {
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

export default NoAuthLayout;
