import Hero from './hero';
import Capabilities from './capabilities';
import Role from './role';
import Overview from './overview';

export default async function LandingPage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Role />
      <Overview />
    </>
  );
}
