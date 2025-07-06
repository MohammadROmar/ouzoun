'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getLocale } from 'next-intl/server';

export async function logoutAction() {
  (await cookies()).delete('access-token');
  const locale = await getLocale();

  redirect(`/${locale}`);
}
