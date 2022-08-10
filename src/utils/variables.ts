export const API_HOST = 'https://jsonplaceholder.typicode.com';

export enum ENDPOINTS {
  ALBUMS = 'albums',
  PHOTOS = 'photos',
}

const queryString = (params: string) => {
  Object.keys(params)
    .map((key: string) => `${key}=${params[key]}`)
    .join('&');
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const createUrl = (url: string, queryOptions: {}) => {
  return `${url}?${queryString(Object(queryOptions))}`;
};
