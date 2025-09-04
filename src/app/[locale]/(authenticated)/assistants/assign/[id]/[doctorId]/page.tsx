import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { get } from '@/shared/api/get';
import Title from '@/shared/components/dashboard/title';
import DoctorInfo from '@/features/doctor-profile/components/doctor-info';
import DoctorContactAndClinic from '@/features/doctor-profile/components/contact-n-clinic';
import ClinicMap from '@/features/doctor-profile/components/clinic-map';

type DoctorDetailsPageProps = {
  params: Promise<{ locale: string; id: string; doctorId: string }>;
};

async function DoctorDetailsPage({ params }: DoctorDetailsPageProps) {
  const { doctorId } = await params;

  const doctor = await get(`/api/users/${doctorId}`);
  // const doctor = getDummyDoctor();

  if (!doctor) {
    return notFound();
  }

  const t = await getTranslations('doctor-info-page');

  return (
    <>
      <Title title={t('title')} />
      <DoctorInfo doctor={doctor} label={t('dr')} />
      <DoctorContactAndClinic doctor={doctor} t={t} />
      {doctor.clinic && <ClinicMap clinic={doctor.clinic} />}
    </>
  );
}

export default DoctorDetailsPage;
