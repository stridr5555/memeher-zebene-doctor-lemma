import { NextResponse } from 'next/server';
import { ADMIN_COOKIE, getAdminPassword, getAdminUsername } from '@/lib/auth';

export async function POST(request: Request) {
  const { username, password } = await request.json().catch(() => ({}));
  const expectedPassword = getAdminPassword();
  const expectedUsername = getAdminUsername();
  if (!expectedPassword) {
    return NextResponse.json({ ok: false, error: 'Admin password is not configured.' }, { status: 500 });
  }
  if (username !== expectedUsername || password !== expectedPassword) {
    return NextResponse.json({ ok: false, error: 'Invalid credentials.' }, { status: 401 });
  }
  const token = process.env.ADMIN_SESSION_TOKEN || expectedPassword;
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 12,
  });
  return response;
}
