import {createSlice} from '@reduxjs/toolkit';
import {Photos} from '../../types/types';
import {getPhotos} from '../thunks';
import {STATE_MODULES} from '../../utils/variables';

const initialState: Photos = {
  data: [],
  loading: false,
  error: false,
};

const photosReducer = createSlice({
  name: STATE_MODULES.PHOTOS,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPhotos.pending, (state, action) => {
        if (state.loading) {
          return;
        }
        state.loading = true;
      })
      .addCase(getPhotos.rejected, (state, action) => {
        if (!state.loading) {
          return;
        }
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getPhotos.fulfilled, (state, action) => {
        if (!state.loading) {
          return;
        }
        state.loading = false;
        state.data = action.payload.data;
      });
  },
});

export default photosReducer.reducer;
