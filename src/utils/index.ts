import { parse, stringify } from 'querystring';

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

export const getRedirect = (): string =>
  stringify({
    redirect: window.location.href,
  });

export function setToken({
  refreshToken = '',
  token = '',
}: {
  refreshToken?: string;
  token?: string;
}): void {
  localStorage.setItem('refreshToken', refreshToken);
  localStorage.setItem('token', token);
}
