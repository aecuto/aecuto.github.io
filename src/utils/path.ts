import { forIn, replace } from 'lodash';

export const getPath = (path: string, params?: object) => {
  let newPath = path;

  forIn(params, (value, key) => {
    newPath = replace(newPath, `:${key}`, value);
  });

  if (newPath.includes(':')) {
    throw new Error(`route's url isn't provided params at ${newPath}`);
  }

  return newPath;
};
