import {createSlice} from '@reduxjs/toolkit';
import {Photos} from '../../types/types';
import {getPhotos} from '../thunks';

const initialState: Photos = {
  data: [],
  loading: false,
  error: null,
};
const photosReducer = createSlice({
  name: 'Photos',
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
        state.data = action.payload?.response!;
      });
  },
});

export default photosReducer.reducer;
