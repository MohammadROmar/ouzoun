import Hero from './hero';
import Services from './services';
import About from './about';
import WhyUs from './why-us';
import MobileApp from './mobile-app';
import Contact from './contact';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <MobileApp />
      <Contact />
    </>
  );
}
