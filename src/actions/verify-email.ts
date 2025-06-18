'use server';

type VerifyEmailActionState = { message: string | undefined };

export async function verifyEmailAction(
  prevState: VerifyEmailActionState,
  formData: FormData,
): Promise<VerifyEmailActionState> {
  const inputs = [0, 1, 2, 3].map(
    (inputNum) => formData.get(`otp-${inputNum}`) as string,
  );

  let hasError = false;

  inputs.map((input) => {
    if (input.trim().length === 0 || isNaN(parseInt(input))) {
      hasError = true;
    }
  });

  if (hasError) {
    return { message: 'Please fill all inputs' };
  }

  return { message: 'success' };
}
