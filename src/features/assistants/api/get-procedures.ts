import { cookies } from 'next/headers';

import { Procedure } from '../models/procedure';
import type { Fetch } from '@/core/models/fetch';

export async function getProcedure(): Promise<Fetch<Procedure[]>> {
  try {
    const accessToken = (await cookies()).get('access-token')?.value;

    const response = await fetch(
      `${process.env.BASE_URL}/api/procedures/FilteredProcedure`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify([]),
        cache: 'no-store',
      },
    );

    if (!response.ok) {
      return { message: 'fetch-error', data: { status: response.status } };
    }

    const procedures = (await response.json()) as Procedure[];
    return { message: 'success', data: procedures };
  } catch (e) {
    console.log(e);
    return { message: 'server-connection', data: { status: 1000 } };
  }
}
