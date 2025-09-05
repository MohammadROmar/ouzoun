import InfoCard from '@/features/user/components/info-card';
import { getContactInfo } from '@/features/user/utils/get-contact-info';
import { getClinicInfo } from '@/features/user/utils/get-clinic-info';
import { User } from '@/core/models/user';

type UserContactAndClinicProps = { user: User; t: (key: string) => string };

function UserContactAndClinic({ user, t }: UserContactAndClinicProps) {
  return (
    <section className="mt-4 flex gap-4 max-md:flex-col max-md:gap-2">
      <InfoCard
        title={t('contact-info')}
        cardDetails={getContactInfo(user, t)}
      />
      {user.clinic && (
        <InfoCard
          title={t('clinic-info')}
          cardDetails={getClinicInfo(user.clinic, t)}
        />
      )}
    </section>
  );
}

export default UserContactAndClinic;
