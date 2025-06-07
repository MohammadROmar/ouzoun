'use server';

import { isValidEmail } from '@/utils/validation';

type EmailState = { message: string | undefined; email?: string };

export async function email(
  prevState: EmailState,
  formData: FormData,
): Promise<EmailState> {
  const email = formData.get('email') as string;

  if (!isValidEmail(email)) {
    return { message: 'Email is invalid', email };
  }

  return { message: 'success' };
}
