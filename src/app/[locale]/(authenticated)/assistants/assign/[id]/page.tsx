type ProcedureDetailsPageProps = {
  params: Promise<{ locale: string; id: string }>;
};

async function ProcedureDetailsPage({ params }: ProcedureDetailsPageProps) {
  const { id } = await params;

  return <div>{id}</div>;
}

export default ProcedureDetailsPage;
