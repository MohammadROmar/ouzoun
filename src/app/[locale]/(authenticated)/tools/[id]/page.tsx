import { redirect } from 'next/navigation';

type Props = { params: Promise<{ locale: string; id: string }> };

export default async function ToolDetailsPage({ params }: Props) {
  const { id, locale } = await params;

  redirect(`/${locale}/tools/${id}/edit`);
}
