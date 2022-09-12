export const API_HOST = 'https://jsonplaceholder.typicode.com';

export enum STATE_MODULES {
  AUTH = 'auth',
  ALBUMS = 'albums',
  PHOTOS = 'photos',
}

export enum ACTIONS {
  GET_PHOTOS = 'GET_PHOTOS',
  GET_ALBUMS = 'GET_ALBUMS',
  GET_PHOTO_DETAIL = 'GET_PHOTO_DETAIL',
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
  FAILED_TO_FETCH: 'Oops, something went wrong.\nPlease try again.',
};
