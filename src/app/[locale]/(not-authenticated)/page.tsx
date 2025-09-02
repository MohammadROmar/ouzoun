import Layout from '@/shared/components/no-auth-layout';
import Hero from '@/features/landing/components/hero';
import Capabilities from '@/features/landing/components/capabilities';
import Role from '@/features/landing/components/role';
import Overview from '@/features/landing/components/overview';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Capabilities />
      <Role />
      <Overview />
    </Layout>
  );
}
