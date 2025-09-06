'use client';

import Logo from '@/shared/components/logo';
import LocaleSwitcher from '@/shared/components/locale/locale-switcher';
import ThemeToggle from '@/shared/components/theme/theme-toggle';
import CustomError from '@/shared/components/error';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

function Error({ error, reset }: ErrorProps) {
  return (
    <>
      <header className="spacing max-container fixed top-0 right-0 left-0 z-50 flex items-center justify-between py-4">
        <Logo />

        <div className="flex items-center gap-6 max-sm:gap-4">
          <LocaleSwitcher />
          <ThemeToggle />
        </div>
      </header>

      <main className="m-auto flex h-screen max-w-2xl flex-col items-center justify-center gap-4 overflow-x-hidden p-4 text-center">
        <CustomError message={error.message} reset={reset} />
      </main>
    </>
  );
}

export default Error;
