'use server';

import { isInvalidNumber } from '@/shared/utils/validation';

type VerifyEmailActionState = { message: string | undefined };

export async function verifyEmailAction(
  prevState: VerifyEmailActionState,
  formData: FormData,
): Promise<VerifyEmailActionState> {
  const inputs = [0, 1, 2, 3, 4, 5].map(
    (inputNum) => formData.get(`otp-${inputNum}`) as string,
  );

  let hasError = false;

  inputs.map((input) => {
    if (isInvalidNumber(input)) {
      hasError = true;
    }
  });

  if (hasError) {
    return { message: 'invalid-input' };
  }

  try {
    const code = inputs.reduce((prev, curr) => `${prev}${curr}`);

    const response = await fetch(
      `${process.env.BASE_URL}/api/users/VerifyForgotPasswordOtp`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      },
    );

    if (!response.ok) {
      return { message: 'failed-to-submit' };
    }

    // (await cookies()).set('reset-otp', code, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: 'strict',
    //   path: '/',
    // });
  } catch (e) {
    console.log(e);

    return { message: 'server-connection' };
  }

  return { message: 'success' };
}
