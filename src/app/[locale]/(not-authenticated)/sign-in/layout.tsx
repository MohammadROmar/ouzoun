import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import type { PropsWithChildren } from 'react';

import Logo from '@/components/shared/logo';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('sign-in-page');

  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default function LoginLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="max-container absolute top-0 right-0 left-0 z-50 p-2 px-6 max-md:py-4">
        <Logo />
      </header>

      <main className="max-container grid min-h-screen items-center max-md:relative md:grid-cols-6">
        {children}
      </main>
    </>
  );
}
