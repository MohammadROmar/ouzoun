import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { get } from '@/shared/api/get';
import Title from '@/shared/components/dashboard/title';
import UserInfo from '@/features/user/components/user-info';
import UserContactAndClinic from '@/features/user/components/contact-n-clinic';
import ClinicMap from '@/features/user/components/clinic-map';

type DoctorDetailsPageProps = {
  params: Promise<{ locale: string; id: string; doctorId: string }>;
};

async function DoctorDetailsPage({ params }: DoctorDetailsPageProps) {
  const { doctorId } = await params;

  const doctor = await get(`/api/users/${doctorId}`);

  if (!doctor) {
    return notFound();
  }

  const t = await getTranslations('doctor-info-page');

  return (
    <>
      <Title title={t('title')} />
      <UserInfo user={doctor} label={t('dr')} />
      <UserContactAndClinic user={doctor} t={t} />
      {doctor.clinic && <ClinicMap clinic={doctor.clinic} />}
    </>
  );
}

export default DoctorDetailsPage;
