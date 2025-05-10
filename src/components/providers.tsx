import type { PropsWithChildren } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </ThemeProvider>
  );
}
