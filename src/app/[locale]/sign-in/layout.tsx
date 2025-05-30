import type { PropsWithChildren } from 'react';

import Logo from '@/components/shared/logo';

export default function LoginLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="max-container absolute top-0 right-0 left-0 p-2 px-6 max-md:py-4">
        <Logo />
      </header>

      <main className="max-container grid min-h-screen items-center md:grid-cols-6">
        {children}
      </main>
    </>
  );
}
