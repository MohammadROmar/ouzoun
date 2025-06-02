import Image from '../image';
import RoleText from './text';
import dashboardImg from '@/assets/images/dashboard.png';

export default function Role() {
  return (
    <section
      id="role"
      className="max-container spacing flex justify-between gap-6 max-lg:flex-col-reverse lg:items-center lg:gap-12"
    >
      <Image
        src={dashboardImg}
        alt="An image a person controlling a dashboard."
      />

      <RoleText />
    </section>
  );
}
