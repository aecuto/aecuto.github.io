import apiPaths from 'constants/api-paths';
import { fetchDelete, fetchGet, fetchPost, fetchPut } from 'utils/axios';
import { getPath } from 'utils/path';

export const getProductList = () => {
  const url = getPath(apiPaths.PRODUCT_LIST);
  return fetchGet(url);
};

export const getProduct = (productId: string) => {
  const url = getPath(apiPaths.PRODUCT_INFO, { productId });
  return fetchGet(url);
};

export const createProduct = (values: object) => {
  const url = getPath(apiPaths.PRODUCT_CREATE);
  return fetchPost(url, values);
};

export const updateProduct = (values: object, params: object) => {
  const url = getPath(apiPaths.PRODUCT_UPDATE, params);
  return fetchPut(url, values);
};

export const deleteProduct = (productId: string) => {
  const url = getPath(apiPaths.PRODUCT_DELETE, { productId });
  return fetchDelete(url);
};
