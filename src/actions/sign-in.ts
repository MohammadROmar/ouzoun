'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getLocale } from 'next-intl/server';

import { isValidEmail, isValidPassword } from '@/utils/validation';

type SignInActionState = {
  message: string | undefined;
  errors: { [key: string]: string };
  email?: string;
  password?: string;
};

export async function signInAction(
  prevState: SignInActionState,
  formData: FormData,
): Promise<SignInActionState> {
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
    return { message: 'invalid-input', errors, email, password };
  }

  (await cookies()).set('access-token', 'true', {
    httpOnly: true,
    secure: true,
    value: 'true',
    maxAge: 60 * 60 * 24 * 30,
  });

  const locale = await getLocale();
  redirect(`/${locale}/dashboard`);
}
