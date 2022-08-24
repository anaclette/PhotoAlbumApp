import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
}

export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: (username: string) => void;
  signOut: (loggedIn: boolean) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = (username: string) => {
    dispatch({type: 'signIn', payload: username});
  };

  const signOut = (loggedIn: boolean) => {
    dispatch({type: 'signOut', payload: loggedIn});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
