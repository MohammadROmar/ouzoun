import SidebarContextProvider from '@/store/theme-provider';
import Header from '@/components/shared/header';
import Sidebar from '@/components/shared/sidebar';
import LandingPage from '@/custom-pages/landing';
import Footer from '@/components/shared/footer';
import { landingNavigation } from '@/data/navigation';

export default async function HomePage() {
  const navigationLinks = await landingNavigation();

  return (
    <>
      <SidebarContextProvider>
        <Header navigationLinks={navigationLinks} />
        <Sidebar navigationLinks={navigationLinks} />
      </SidebarContextProvider>
      <main>
        <LandingPage />
      </main>
      <Footer navigationLinks={navigationLinks} />
    </>
  );
}
