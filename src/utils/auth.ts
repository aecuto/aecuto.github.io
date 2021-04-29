const tokenKey = 'token';

export const getToken = () => localStorage.getItem(tokenKey);

export const setToken = (value: string) =>
  localStorage.setItem(tokenKey, value);

export const removeToken = () => localStorage.removeItem(tokenKey);
