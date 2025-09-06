import { cookies } from 'next/headers';

import type { Fetch } from '@/core/models/fetch';

export async function get<T>(
  path: string,
  options: RequestInit = {},
): Promise<Fetch<T>> {
  try {
    const accessToken = (await cookies()).get('access-token')?.value;

    const response = await fetch(`${process.env.BASE_URL}${path}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      ...options,
    });

    if (!response.ok) {
      return { message: 'fetch-error', data: { status: response.status } };
    }

    const data = (await response.json()) as T;

    return { message: 'success', data };
  } catch (e) {
    const error = e as Error;

    if (error.message.includes('404')) {
      return { message: 'fetch-error', data: { status: 404 } };
    }

    return { message: 'server-connection', data: { status: 1000 } };
  }
}
