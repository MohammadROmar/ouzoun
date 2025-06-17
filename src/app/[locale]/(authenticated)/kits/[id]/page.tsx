import { kits } from '@/data/dummy/kits';
import { notFound } from 'next/navigation';

type KitDetailsPageProps = { params: Promise<{ locale: string; id: string }> };

export default async function KitDetailsPage({ params }: KitDetailsPageProps) {
  const { id: kitId } = await params;

  const kit = kits.find((kit) => kit.id === kitId);

  if (!kit) {
    return notFound();
  }

  return (
    <article>
      <h1 className="ltr:font-ubuntu text-3xl md:text-4xl">{kit.name}</h1>
    </article>
  );
}
