'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getLocale } from 'next-intl/server';

import type { DeleteKitActionState } from '../models/kit-action-state';

export async function deleteKitAction(
  prevState: DeleteKitActionState,
): Promise<DeleteKitActionState> {
  const accessToken = (await cookies()).get('access-token')?.value;

  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/kits/${prevState.id}`,
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

  revalidatePath('/en/kits');
  revalidatePath('/ar/kits');

  const locale = await getLocale();
  redirect(`/${locale}/kits`);
}
