import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Auth} from '../../types/types';
import {STATE_MODULES} from '../../utils/variables';

const initialState: Auth = {
  username: null,
};

const authReducer = createSlice({
  name: STATE_MODULES.AUTH,
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>) => ({
      ...state,
      username: action.payload,
    }),
    logOut: () => initialState,
  },
});

export const {logIn, logOut} = authReducer.actions;

export default authReducer.reducer;
