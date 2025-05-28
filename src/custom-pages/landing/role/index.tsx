import Image from '../image';
import AboutText from './text';
import adminRoleImg from '@/assets/images/admin-role.png';

export default async function Role() {
  return (
    <section
      id="role"
      className="max-container spacing flex justify-between gap-6 max-lg:flex-col-reverse lg:items-center lg:gap-12"
    >
      <Image
        src={adminRoleImg}
        alt="An image of a woman managing a business."
      />

      <AboutText />
    </section>
  );
}
