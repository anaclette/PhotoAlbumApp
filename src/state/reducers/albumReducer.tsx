import {createSlice} from '@reduxjs/toolkit';
import {STATE_MODULES} from '../../utils/variables';
import {Albums} from '../../types/types';
import {getAlbums} from '../thunks';

const initialState: Albums = {
  data: [],
  loading: false,
  error: null,
};

const albumReducer = createSlice({
  name: STATE_MODULES.ALBUMS,
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
