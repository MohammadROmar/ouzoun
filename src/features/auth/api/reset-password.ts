'use server';

import { cookies } from 'next/headers';

import { isValidPassword } from '@/shared/utils/validation';

type ResetPasswordActionState = {
  message: string | undefined;
  password?: string;
  confirmPassword?: string;
};

export async function resetPasswordAction(
  prevState: ResetPasswordActionState,
  formData: FormData,
): Promise<ResetPasswordActionState> {
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirm-password') as string;

  if (!isValidPassword(password) || password !== confirmPassword) {
    return { message: 'invalid-input', password, confirmPassword };
  }

  try {
    const cookieStore = await cookies();

    const email = cookieStore.get('reset-email')?.value;
    // const otp = cookieStore.get('reset-otp')?.value;

    if (!email) {
      return { message: 'try-again', password, confirmPassword };
    }

    const response = await fetch(
      `${process.env.BASE_URL}/api/users/ResetPassword`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email,
          newPassword: password,
          confirmNewPassword: confirmPassword,
        }),
      },
    );

    if (!response.ok) {
      return { message: 'failed-to-submit', password, confirmPassword };
    }
  } catch (e) {
    console.log(e);
    return { message: 'server-connection', password, confirmPassword };
  }

  return { message: 'success', password, confirmPassword };
}
