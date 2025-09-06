'use server';

import { revalidatePath } from 'next/cache';

import { isInvalidNumber } from '../../../shared/utils/validation';
import { cookies } from 'next/headers';

type ManageProcedureActionState = {
  id: number;
  message: undefined | string;
  status?: string;
  errors?: { status: boolean; assistants: boolean };
};

export async function manageProcedureAction(
  prevState: ManageProcedureActionState,
  formData: FormData,
): Promise<ManageProcedureActionState> {
  const status = formData.get('status') as string;
  const assistants = formData.getAll('assistants') as unknown as string[];

  const errors = { status: false, assistants: false };

  if (isInvalidNumber(status) || !['2', '4'].includes(status)) {
    errors.status = true;
  }

  if (
    assistants &&
    assistants.length === 0 &&
    !isInvalidNumber(status) &&
    status === '2'
  ) {
    errors.assistants = true;
  }

  if (errors.status || errors.assistants) {
    return { message: 'invalid-input', status, id: prevState.id, errors };
  }

  try {
    const accessToken = (await cookies()).get('access-token')?.value;

    let response: Response;
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    };

    if (status === '4') {
      response = await fetch(
        `${process.env.BASE_URL}/api/procedures/ChangeStatus`,
        {
          method: 'PATCH',
          headers,
          body: JSON.stringify({
            procedureId: prevState.id,
            newStatus: +status,
          }),
        },
      );
    } else {
      response = await fetch(`${process.env.BASE_URL}/api/procedures`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          procedureId: prevState.id,
          assistantsIds: assistants,
        }),
      });
    }

    if (!response.ok) {
      return {
        id: prevState.id,
        message:
          response.status === 401 || response.status === 403
            ? 'unauthorized'
            : 'failed-to-change',
        status,
      };
    }
  } catch (error) {
    console.log(error);

    return { message: 'server-connection', status, id: prevState.id };
  }

  revalidatePath('/en/assistants/assign');
  revalidatePath('/ar/assistants/assign');

  return { message: 'success', id: prevState.id, status };
}
