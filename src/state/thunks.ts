import {createAsyncThunk} from '@reduxjs/toolkit';
import {ACTIONS, API_HOST, STATE_MODULES} from '../utils/variables';

export const getPhotos = createAsyncThunk(
  `${STATE_MODULES.PHOTOS}/${ACTIONS.GET_PHOTOS}`,
  async () => {
    try {
      const photos = await fetch(`${API_HOST}/${STATE_MODULES.PHOTOS}`)
        .then(response => response.json())
        .then(data => data);
      console.log('photos from thunk: ', photos);
      return photos;
    } catch (error) {
      console.error(error);
    }
  },
);

export const getAlbums = createAsyncThunk(
  `${STATE_MODULES.ALBUMS}/${ACTIONS.GET_ALBUMS}`,
  async () => {
    try {
      const albums = await fetch(`${API_HOST}/${STATE_MODULES.ALBUMS}`)
        .then(response => response.json())
        .then(data => data);
      console.log('albums from thunk: ', albums);
      return albums;
    } catch (error) {
      console.warn('Failed to fetch albums');
    }
  },
);
