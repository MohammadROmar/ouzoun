import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { PropsWithChildren } from 'react';

export default async function NotAuthLayout({ children }: PropsWithChildren) {
  const isAuthenticated = (await cookies()).get('access-token')?.value;

  if (isAuthenticated) {
    redirect('/dashboard');
  }

  return children;
}
