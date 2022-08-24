import {AuthState} from './Auth';

type AuthAction =
  | {type: 'signIn'; payload: string}
  | {type: 'signOut'; payload: boolean};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload,
      };

    case 'signOut':
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};
