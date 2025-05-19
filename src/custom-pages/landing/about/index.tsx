import AboutImage from './image';
import AboutText from './text';

export default async function About() {
  return (
    <section
      id="about"
      className="max-container spacing flex justify-between gap-6 max-lg:flex-col-reverse lg:items-center lg:gap-12"
    >
      <AboutImage />

      <AboutText />
    </section>
  );
}
