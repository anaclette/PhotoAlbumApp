export const API_HOST = 'https://jsonplaceholder.typicode.com';
export const PHOTO_DETAIL_URL = 'https://via.placeholder.com';

export enum ENDPOINTS {
  ALBUMS = 'albums',
  PHOTOS = 'photos',
}

// const queryString = (params: string) => {
//   Object.keys(params)
//     .map((key: string) => `${key}=${params[key]}`)
//     .join('&');
// };

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// export const createUrl = (url: string, queryOptions: string) => {
//   return `${url}?${queryString(queryOptions)}`;
// };

export const randomIcon = () => {
  const iconNames = [
    'beer',
    'bicycle',
    'airplane',
    'color-palette',
    'flower',
    'book',
    'american-football',
    'heart',
    'paw',
    'star',
    'game-controller',
  ];

  return iconNames[Math.floor(Math.random() * iconNames.length)];
};
