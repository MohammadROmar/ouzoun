import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  const cookieStore = await cookies();

  const refreshToken = cookieStore.get('refresh-token')?.value;
  const accessToken = cookieStore.get('access-token')?.value;

  if (!refreshToken) {
    return NextResponse.json({ error: 'refresh-failed' }, { status: 401 });
  }

  try {
    const response = await fetch(
      `${process.env.BASE_URL}/api/users/token/refresh`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ refreshToken }),
      },
    );
    if (!response.ok) {
      return NextResponse.json({ error: 'refresh-failed' }, { status: 401 });
    }

    const data = await response.json();

    const res = NextResponse.json({ success: true }, { status: 200 });

    res.cookies.set('refresh-token', data.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 5,
    });
    res.cookies.set('access-token', data.token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 22,
    });

    return res;
  } catch (e) {
    console.log(e);

    return NextResponse.json({ error: 'refresh-failed' }, { status: 401 });
  }
}
