'use server';

import { isValidPassword } from '@/shared/utils/validation';
import { cookies } from 'next/headers';

type RecoverAssistantActionState = {
  id: string;
  message: string | undefined;
  defaultValues?: { password: string; confirmPassword: string };
  errors?: { password?: boolean; confirmPassword?: boolean };
};

export async function recoverAssistantAction(
  prevState: RecoverAssistantActionState,
  formData: FormData,
): Promise<RecoverAssistantActionState> {
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirm-password') as string;

  const errors: { password?: boolean; confirmPassword?: boolean } = {};
  errors.password = !isValidPassword(password);
  errors.confirmPassword = !isValidPassword(confirmPassword);

  if (
    errors.password ||
    errors.confirmPassword ||
    password !== confirmPassword
  ) {
    return {
      errors,
      id: prevState.id,
      message: 'invalid-input',
      defaultValues: { password, confirmPassword },
    };
  }

  try {
    const accessToken = (await cookies()).get('access-token')?.value;

    const response = await fetch(
      `${process.env.BASE_URL}/api/users/AssistantAccountRecovery`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ userId: prevState.id, newPassword: password }),
      },
    );

    if (!response.ok) {
      return {
        errors,
        id: prevState.id,
        defaultValues: { password, confirmPassword },
        message:
          response.status === 401 || response.status === 403
            ? 'unauthorized'
            : 'failed-to-change',
      };
    }
  } catch (e) {
    console.log(e);

    return {
      id: prevState.id,
      message: 'server-connection',
      defaultValues: { password, confirmPassword },
    };
  }

  return {
    message: 'success',
    id: prevState.id,
    defaultValues: { password, confirmPassword },
  };
}
