export const API_HOST = 'https://jsonplaceholder.typicode.com';

export const ENDPOINTS = {
  ALBUMS: 'albums',
  PHOTOS: 'photos',
};

const queryString = params => {
  Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&');
};

export const capitalizeFirstLetter = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const createUrl = (url, queryOptions) => {
  return `${url}?${queryString(queryOptions)}`;
};
