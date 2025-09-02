'use server';

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
    return { message: 'Password is invalid', password, confirmPassword };
  }

  return { message: 'success' };
}
