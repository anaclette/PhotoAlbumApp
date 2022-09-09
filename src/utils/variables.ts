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
  FAILED_TO_FETCH: 'Oops, something went wrong.\nPlease try again.',
  ACCESSIBILITY_HINT: {
    USERNAME_VALIDATION: 'Verifies if current user matches logged in.',
    USERNAME_LENGTH: 'Validates if username is longer than 4 characters.',
    USERNAME_CHARTS_TYPE: 'Validates if username has no special characters.',
  },
  ACCESSIBILITY_LABEL: {
    BACK: 'Go back',
    BACK_HINT: 'Back to previous screen',
  },
};
