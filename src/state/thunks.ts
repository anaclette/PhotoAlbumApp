import {createAsyncThunk} from '@reduxjs/toolkit';
import useFetch from '../utils/hooks/useFetch';
import {API_HOST, ENDPOINTS} from '../utils/variables';

export const getPhotos = createAsyncThunk('user/requestPhotos', async () => {
  try {
    const photos = await useFetch(`${API_HOST}/${ENDPOINTS.PHOTOS}`);
    return photos;
  } catch (error) {
    console.warn('Failed to fetch photos');
  }
});

export const getAlbums = createAsyncThunk('user/requestAlbums', async () => {
  try {
    const albums = await useFetch(`${API_HOST}/${ENDPOINTS.ALBUMS}`);
    return albums;
  } catch (error) {
    console.warn('Failed to fetch albums');
  }
});
