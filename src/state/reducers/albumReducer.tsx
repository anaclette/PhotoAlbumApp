import {createSlice} from '@reduxjs/toolkit';
import {Album} from '../../types/types';
import {getAlbums} from '../thunks';

const initialState: Album = {
  data: [],
  loading: false,
  error: null,
};

const albumReducer = createSlice({
  name: 'Albums',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAlbums.pending, (state, action) => {
        if (state.loading) {
          return;
        }
        state.loading = true;
      })
      .addCase(getAlbums.rejected, (state, action) => {
        if (!state.loading) {
          return;
        }
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getAlbums.fulfilled, (state, action) => {
        if (!state.loading) {
          return;
        }
        state.loading = false;
        state.data = action.payload?.response!;
      });
  },
});

export default albumReducer.reducer;
