import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Albums, Album} from '../../types/types';
import {getAlbums} from '../thunks';
import {STATE_MODULES} from '../../utils/variables';

const initialState = {
  data: [],
  loading: false,
  error: null,
} as Albums;

const {pending, fulfilled, rejected} = getAlbums;

const albumReducer = createSlice({
  name: STATE_MODULES.ALBUMS,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(pending, state => {
        state.loading = true;
      })
      .addCase(rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(fulfilled, (state, action: PayloadAction<Album[]>) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default albumReducer.reducer;
