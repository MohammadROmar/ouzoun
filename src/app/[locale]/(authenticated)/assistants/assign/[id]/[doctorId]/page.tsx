type DoctorDetailsPageProps = {
  params: Promise<{ locale: string; id: string; doctorId: string }>;
};

async function DoctorDetailsPage({ params }: DoctorDetailsPageProps) {
  const { doctorId } = await params;

  return <div>{doctorId}</div>;
}

export default DoctorDetailsPage;
