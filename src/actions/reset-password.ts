'use server';

import { isValidPassword } from '@/utils/validation';

type ResetPasswordState = {
  message: string | undefined;
  password?: string;
  confirmPassword?: string;
};

export async function resetPassword(
  prevState: ResetPasswordState,
  formData: FormData,
): Promise<ResetPasswordState> {
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirm-password') as string;

  if (!isValidPassword(password) || password !== confirmPassword) {
    return { message: 'Password is invalid', password, confirmPassword };
  }

  return { message: 'success' };
}
