import Image from '../image';
import RoleText from './text';
import adminImg from '@/assets/images/admin.png';

export default async function Role() {
  return (
    <section
      id="role"
      className="max-container spacing flex justify-between gap-6 max-lg:flex-col-reverse lg:items-center lg:gap-12"
    >
      <Image src={adminImg} alt="An image of a woman managing a business." />

      <RoleText />
    </section>
  );
}
