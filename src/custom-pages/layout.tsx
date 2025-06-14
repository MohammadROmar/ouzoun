import type { PropsWithChildren } from 'react';

import SidebarContextProvider from '@/store/sidebar';
import Header from '@/components/shared/header';
import Sidebar from '@/components/shared/sidebar';
import Footer from '@/components/shared/footer';
import { landingNavigation } from '@/data/navigation/landing';

type LayoutProps = {
  hasHeader?: boolean;
  hasFooter?: boolean;
} & PropsWithChildren;

export default async function Layout({
  hasHeader = true,
  hasFooter = true,
  children,
}: LayoutProps) {
  const navigationLinks = await landingNavigation();

  return (
    <>
      {hasHeader && (
        <SidebarContextProvider>
          <Header navigationLinks={navigationLinks} />
          <Sidebar navigationLinks={navigationLinks} />
        </SidebarContextProvider>
      )}

      <main>{children}</main>

      {hasFooter && <Footer navigationLinks={navigationLinks} />}
    </>
  );
}
