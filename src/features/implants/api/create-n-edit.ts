'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

import { getImplantInputErrors } from '../utils/actions-errors';
import type { ImplantActionState } from '../models/implant-action-state';
import type { ImplantInputs } from '../models/implant-inputs';

export async function implantAction(
  prevState: ImplantActionState,
  formData: FormData,
): Promise<ImplantActionState> {
  const data = Object.fromEntries(formData.entries()) as ImplantInputs;

  const errors = getImplantInputErrors(data);
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
      formData.append('implantId', prevState.id);
    }

    const accessToken = (await cookies()).get('access-token')?.value;

    const response = await fetch(
      `${process.env.BASE_URL}/api/implants${prevState.action === 'EDIT' ? `/${prevState.id}` : ''}`,
      {
        method: prevState.action === 'CREATE' ? 'POST' : 'PATCH',
        headers: { Authorization: `Bearer ${accessToken}` },
        body: formData,
      },
    );

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

  revalidatePath('/en/implants', 'layout');
  revalidatePath('/ar/implants', 'layout');

  return {
    message: 'success',
    id: prevState.id,
    action: prevState.action,
    defaultValues: data,
  };
}
