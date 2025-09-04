import InfoCard from '@/features/doctor-profile/components/info-card';
import { getContactInfo } from '@/features/doctor-profile/utils/get-contact-info';
import { getClinicInfo } from '@/features/doctor-profile/utils/get-clinic-info';
import { User } from '@/core/models/user';

type Props = { doctor: User; t: (key: string) => string };

function DoctorContactAndClinic({ doctor, t }: Props) {
  return (
    <section className="mt-4 flex gap-4 max-md:flex-col max-md:gap-2">
      <InfoCard
        title={t('contact-info')}
        cardDetails={getContactInfo(doctor, t)}
      />
      {doctor.clinic && (
        <InfoCard
          title={t('clinic-info')}
          cardDetails={getClinicInfo(doctor.clinic, t)}
        />
      )}
    </section>
  );
}

export default DoctorContactAndClinic;
