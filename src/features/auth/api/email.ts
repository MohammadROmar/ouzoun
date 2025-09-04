'use server';

import { isValidEmail } from '@/shared/utils/validation';

type EmailActionState = { message: string | undefined; email?: string };

export async function emailAction(
  prevState: EmailActionState,
  formData: FormData,
): Promise<EmailActionState> {
  const email = formData.get('email') as string;

  if (!isValidEmail(email)) {
    return { message: 'invalid-input', email };
  }

  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/users/ForgotPassword`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      },
    );

    if (!response.ok) {
      return { message: 'failed-to-submit', email };
    }
  } catch (e) {
    console.log(e);

    return { message: 'server-connection', email };
  }

  return { message: 'success', email };
}
