import { getTranslations } from 'next-intl/server';

import Title from '@/shared/components/dashboard/title';
import UserInfo from '@/features/user/components/user-info';
import UserContactAndClinic from '@/features/user/components/contact-n-clinic';
import ClinicMap from '@/features/user/components/clinic-map';
import ErrorHandler from '@/shared/components/error-handler';
import { get } from '@/shared/api/get';
import { User } from '@/core/models/user';

type DoctorDetailsPageProps = {
  params: Promise<{ locale: string; id: string; doctorId: string }>;
};

async function DoctorDetailsPage({ params }: DoctorDetailsPageProps) {
  const { doctorId } = await params;

  const responseData = await get<User>(`/api/users/${doctorId}`);

  if (responseData.message !== 'success') {
    return (
      <ErrorHandler
        message={responseData.message}
        status={responseData.data.status}
      />
    );
  }

  const doctor = responseData.data as User;

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
