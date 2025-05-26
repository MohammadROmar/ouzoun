import Image from '../image';
import AboutText from './text';
import dentistImg from '@/assets/images/dentist.png';

export default async function About() {
  return (
    <section
      id="about"
      className="max-container spacing flex justify-between gap-6 max-lg:flex-col-reverse lg:items-center lg:gap-12"
    >
      <Image image={dentistImg} />

      <AboutText />
    </section>
  );
}
