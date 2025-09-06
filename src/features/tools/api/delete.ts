'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getLocale } from 'next-intl/server';

import type { DeleteToolActionState } from '../models/tool-action-state';

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
      return {
        message:
          response.status === 401 || response.status === 403
            ? 'unauthorized'
            : 'failed-to-delete',
        id: prevState.id,
      };
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
