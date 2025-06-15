'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { isValidEmail, isValidPassword } from '@/utils/validation';
import { getLocale } from 'next-intl/server';

type SignInState =
  | { errors: { [key: string]: string }; email?: string; password?: string }
  | undefined;

export async function signIn(
  prevState: SignInState,
  formData: FormData,
): Promise<SignInState> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const errors: { [key: string]: string } = {};

  if (!isValidEmail(email)) {
    errors.email = 'Email is invalid';
  }

  if (!isValidPassword(password)) {
    errors.password = `${password} is invalid`;
  }

  if (Object.keys(errors).length > 0) {
    return { errors, email, password };
  }

  (await cookies()).set('access-token', 'true', {
    httpOnly: true,
    secure: true,
    value: 'true',
    maxAge: 60 * 60 * 24 * 30,
  });

  // (await cookies()).delete('access-token')

  const locale = await getLocale();
  redirect(`/${locale}/dashboard`);
}
