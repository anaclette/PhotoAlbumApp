export const API_HOST = 'https://jsonplaceholder.typicode.com';

export enum ENDPOINTS {
  ALBUMS = 'albums',
  PHOTOS = 'photos',
}

export const copies = {
  ALBUMS_TITLE: 'Albums',
  PHOTOS_TITLE: 'Photos',
  LOGIN_SCREEN: {
    SIGN_IN: 'Sign in',
    LOG_OUT: 'Log out',
    DIFF_ACCOUNT: 'Sign with a different account.',
    WRONG_USER_INPUT: {
      LENGTH: 'Username must be at least five characters long.',
      CHART_TYPE: 'Alphanumeric characters only.',
      EMPTY_FIELD: 'Username is required',
    },
  },
};
