import { parseCookies } from 'cookie';

export function isAuthenticated(ctx) {
  const cookies = parseCookies(ctx);
  return cookies.authenticated === 'true';
}