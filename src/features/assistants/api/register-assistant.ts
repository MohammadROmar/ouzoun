'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

import { getAssistantInputsErrors } from '../utils/register-assistant-action-errors';
import type { RegisterAssistantInputs } from '../models/register-assistant-inputs';

export type RegisterAssistantActionState = {
  message: string | undefined;
  errors?: { [K in keyof RegisterAssistantInputs]?: boolean };
  defaultValues?: RegisterAssistantInputs;
};

export async function registerAssistantAction(
  prevState: RegisterAssistantActionState,
  formData: FormData,
): Promise<RegisterAssistantActionState> {
  const data = Object.fromEntries(
    formData.entries(),
  ) as RegisterAssistantInputs;

  const errors = getAssistantInputsErrors(data);
  const hasError = Object.entries(errors).find((error) => error[1]);

  if (hasError) {
    return {
      message: 'invalid-input',
      errors,
      defaultValues: data,
    };
  }

  try {
    formData.append('latitude', '0');
    formData.append('longtitude', '0');
    formData.append('role', 'AssistantDoctor');

    const accessToken = (await cookies()).get('access-token')?.value;
    const response = await fetch(`${process.env.BASE_URL}/api/users/register`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken}` },
      body: formData,
    });

    if (!response.ok) {
      return {
        message:
          response.status === 401 || response.status === 403
            ? 'unauthorized'
            : 'failed-to-register',
        defaultValues: data,
        errors,
      };
    }
  } catch (error) {
    console.log(error);

    return {
      message: 'server-connection',
      errors,
      defaultValues: data,
    };
  }

  revalidatePath('/en/assistants/all');
  revalidatePath('/ar/assistants/all');

  return { message: 'success', defaultValues: data };
}
