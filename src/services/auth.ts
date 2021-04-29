import apiPaths from 'constants/api-paths';
import { fetchGet, fetchPost, noAuth } from 'utils/axios';
import { getPath } from 'utils/path';

type Values = {
  email?: string;
  password?: string;
};

type LoginRes = {
  token: string;
};

export const login = (values: Values) => {
  const url = getPath(apiPaths.LOGIN);
  return fetchPost<LoginRes>(url, values, noAuth);
};

export const getMe = () => {
  const url = getPath(apiPaths.ME);
  return fetchGet(url);
};
