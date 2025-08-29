'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getLocale } from 'next-intl/server';

import { isInvalidText, isInvalidNumber, isInvalidImage } from './validation';
import type { ToolInputs } from '@/models/tool';

export type ToolActionState = {
  id?: string;
  action: 'CREATE' | 'EDIT';
  defaultValues?: ToolInputs;
  message: string | undefined;
  errors?: { [K in keyof ToolInputs]?: boolean };
};

type DeleteToolActionState = { message: string | undefined; id: string };

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
      headers:
        prevState.action === 'CREATE'
          ? {
              Authorization: `Bearer ${accessToken}`,
            }
          : {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
      body:
        prevState.action === 'CREATE'
          ? formData
          : JSON.stringify({
              id: prevState.id,
              name: data.name,
              width: data.width,
              height: data.height,
              thickness: data.thickness,
              quantity: data.quantity,
              kitId: data.kitId,
              categoryId: data.categoryId,
            }),
    });

    if (!response.ok) {
      return {
        message: `failed-to-${prevState.action === 'CREATE' ? 'create' : 'edit'}`,
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

export async function deleteToolAction(
  prevState: DeleteToolActionState,
): Promise<DeleteToolActionState> {
  const accessToken = (await cookies()).get('access-token')?.value;

  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/tools/${prevState.id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    if (!response.ok) {
      return { message: 'failed-to-delete', id: prevState.id };
    }
  } catch (e) {
    console.log(e);

    return { message: 'server-connection', id: prevState.id };
  }

  revalidatePath('/en/tools');
  revalidatePath('/ar/tools');

  const locale = await getLocale();
  redirect(`/${locale}/tools`);
}

function getToolInputErrors(data: ToolInputs) {
  const errors: { [K in keyof ToolInputs]?: boolean } = {};

  errors.name = isInvalidText(data.name);
  errors.categoryId = isInvalidText(data.categoryId.toString());

  errors.width = isInvalidNumber(data.width);
  errors.height = isInvalidNumber(data.height);
  errors.thickness = isInvalidNumber(data.thickness);
  errors.quantity = isInvalidNumber(data.quantity);

  errors.image = isInvalidImage(data.image);

  return errors;
}
