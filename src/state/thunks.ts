import {createAsyncThunk} from '@reduxjs/toolkit';
import {ACTIONS, API_HOST, STATE_MODULES} from '../utils/variables';

export const getPhotos = createAsyncThunk(
  `${STATE_MODULES.PHOTOS}/${ACTIONS.GET_PHOTOS}`,
  async (_, {rejectWithValue}) => {
    try {
      const photos = await fetch(`${API_HOST}/${STATE_MODULES.PHOTOS}`)
        .then(response => response.json())
        .then(data => data);
      return photos;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const getAlbums = createAsyncThunk(
  `${STATE_MODULES.ALBUMS}/${ACTIONS.GET_ALBUMS}`,
  async (_, {rejectWithValue}) => {
    try {
      const albums = await fetch(`${API_HOST}/${STATE_MODULES.ALBUMS}`)
        .then(response => response.json())
        .then(data => data);
      return albums;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);
