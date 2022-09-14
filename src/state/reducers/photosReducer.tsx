import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Photos, Photo} from '../../types/types';
import {getPhotos} from '../thunks';
import {STATE_MODULES} from '../../utils/variables';

const initialState = {
  data: [],
  loading: false,
  error: false,
} as Photos;

const {pending, fulfilled, rejected} = getPhotos;

const photosReducer = createSlice({
  name: STATE_MODULES.PHOTOS,
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
      .addCase(fulfilled, (state, action: PayloadAction<Photo[]>) => {
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export default photosReducer.reducer;
