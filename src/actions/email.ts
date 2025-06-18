'use server';

import { isValidEmail } from '@/utils/validation';

type EmailActionState = { message: string | undefined; email?: string };

export async function emailAction(
  prevState: EmailActionState,
  formData: FormData,
): Promise<EmailActionState> {
  const email = formData.get('email') as string;

  if (!isValidEmail(email)) {
    return { message: 'Email is invalid', email };
  }

  return { message: 'success' };
}
