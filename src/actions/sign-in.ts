'use server';

import { isValidEmail, isValidPassword } from '@/utils/validation';

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
}
