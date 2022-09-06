import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserLogin} from '../../types/types';

interface UserState {
  username: UserLogin | null;
}
const initialState: UserState = {
  username: null,
};

const authReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    logIn: (state, action: PayloadAction<UserLogin>) => {
      state.username = action.payload;
    },
    logOut: () => initialState,
    updateUser: (state, action: PayloadAction<UserLogin>) => {
      state.username = {...state.username, ...action.payload};
    },
  },
});

export default authReducer.reducer;
