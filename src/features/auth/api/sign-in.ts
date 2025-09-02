'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getLocale } from 'next-intl/server';

import { isValidEmail, isValidPassword } from '@/shared/utils/validation';

type SignInActionState = {
  message: string | undefined;
  errors: { [key: string]: string };
  email?: string;
  password?: string;
};

type ResonseBody = {
  token: string;
  refreshToken: string;
  username: string;
  expires: number;
  role: string;
};

export async function signInAction(
  prevState: SignInActionState,
  formData: FormData,
): Promise<SignInActionState> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const fcmToken = formData.get('fcm-token') as string;

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

  try {
    const response = await fetch(`${process.env.BASE_URL}/api/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
        deviceToken: fcmToken,
      }),
    });

    if (!response.ok) {
      return { message: 'error', errors, email, password };
    }

    const data = (await response.json()) as ResonseBody;

    if (data.role !== 'Administrator') {
      return { message: 'invalid-role', errors: {}, email, password };
    }

    const cookieStore = await cookies();
    cookieStore.set('refresh-token', data.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 30,
    });
    cookieStore.set('access-token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    });
  } catch (error) {
    console.log(error);

    return { message: 'server-error', errors: {}, email, password };
  }

  const locale = await getLocale();
  redirect(`/${locale}/dashboard`);
}
