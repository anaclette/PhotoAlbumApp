export const API_HOST = 'https://jsonplaceholder.typicode.com';

export enum ENDPOINTS {
  ALBUMS = 'albums',
  PHOTOS = 'photos',
}

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

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
