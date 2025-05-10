import { getTranslations } from 'next-intl/server';

export default async function LandingPage() {
  const translation = await getTranslations('LandingPage');

  return (
    <section>
      <h1>{translation('hello')}</h1>
    </section>
  );
}
