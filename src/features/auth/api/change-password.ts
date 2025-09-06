'use server';

import { isValidPassword } from '@/shared/utils/validation';
import type { ChangePasswordInputs } from '../../user/models/change-password-inputs';
import { cookies } from 'next/headers';

type ChangePasswordActionState = {
  message: string | undefined;
  defaulValues?: ChangePasswordInputs;
  errors?: { [K in keyof ChangePasswordInputs]?: boolean };
};

export async function changePasswordAction(
  prevState: ChangePasswordActionState,
  formData: FormData,
): Promise<ChangePasswordActionState> {
  const data = Object.fromEntries(formData.entries()) as ChangePasswordInputs;

  const errors = getChangePasswordActionErrors(data);
  const hasError = Object.entries(errors).find((error) => error[1]);

  if (hasError) {
    return { message: 'invalid-input', defaulValues: data, errors };
  }

  if (data.newPassword !== data.confirmNewPassword) {
    return { message: 'passwords-not-matching', defaulValues: data };
  }

  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access-token')?.value;

    const response = await fetch(
      `${process.env.BASE_URL}/api/users/ChangePassword`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          oldPassword: data.oldPassword,
          newPassword: data.newPassword,
          confirmNewPassword: data.confirmNewPassword,
        }),
      },
    );

    if (!response.ok) {
      return { message: 'failed-to-change', defaulValues: data };
    }

    const responseData = await response.json();

    cookieStore.set('access-token', responseData.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 30,
    });
    cookieStore.set('refresh-token', responseData.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 30,
    });
  } catch (e) {
    console.log(e);
    return { message: 'server-connection', defaulValues: data };
  }

  return { message: 'success', defaulValues: data };
}

function getChangePasswordActionErrors(data: ChangePasswordInputs) {
  const errors: ChangePasswordActionState['errors'] = {};

  errors.oldPassword = !isValidPassword(data.oldPassword);
  errors.newPassword = !isValidPassword(data.newPassword);
  errors.confirmNewPassword = !isValidPassword(data.confirmNewPassword);

  return errors;
}
