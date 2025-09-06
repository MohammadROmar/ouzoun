'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

import { getToolInputErrors } from '../utils/actions-errors';
import type { ToolInputs } from '../models/tool-inputs';
import type { ToolActionState } from '../models/tool-action-state';

export async function toolAction(
  prevState: ToolActionState,
  formData: FormData,
): Promise<ToolActionState> {
  const data = Object.fromEntries(formData.entries()) as unknown as ToolInputs;

  const errors = getToolInputErrors(data);
  const hasError = Object.entries(errors).find((error) => error[1]);

  if (hasError) {
    return {
      message: 'invalid-input',
      errors,
      defaultValues: data,
      id: prevState.id,
      action: prevState.action,
    };
  }

  try {
    if (prevState.id) {
      formData.append('id', prevState.id);
    }

    const accessToken = (await cookies()).get('access-token')?.value;

    const endpoint = `${process.env.BASE_URL}/api/tools`;
    const response = await fetch(endpoint, {
      method: prevState.action === 'CREATE' ? 'POST' : 'PATCH',
      headers: { Authorization: `Bearer ${accessToken}` },
      body: formData,
    });

    if (!response.ok) {
      return {
        message:
          response.status === 401 || response.status === 403
            ? 'unauthorized'
            : `failed-to-${prevState.action === 'CREATE' ? 'create' : 'edit'}`,
        errors,
        defaultValues: data,
        id: prevState.id,
        action: prevState.action,
      };
    }
  } catch (error) {
    console.log(error);

    return {
      message: 'server-connection',
      errors,
      defaultValues: data,
      id: prevState.id,
      action: prevState.action,
    };
  }

  revalidatePath('/en/tools');
  revalidatePath('/ar/tools');

  return {
    message: 'success',
    action: prevState.action,
    id: prevState.id,
    defaultValues: data,
  };
}
