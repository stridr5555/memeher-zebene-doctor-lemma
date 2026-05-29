import { cookies } from 'next/headers';

export const ADMIN_COOKIE = 'memeher_admin_session';

export function getAdminUsername() {
  return process.env.ADMIN_USERNAME || 'memeher';
}

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || process.env.BACKUP_CODE || '';
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const value = cookieStore.get(ADMIN_COOKIE)?.value;
  return Boolean(value && value === process.env.ADMIN_SESSION_TOKEN);
}
