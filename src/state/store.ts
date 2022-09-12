import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import authReducer from './reducers/authReducer';
import albumReducer from './reducers/albumReducer';
import photosReducer from './reducers/photosReducer';
import {RootState} from '../types/types';
import {STATE_MODULES} from '../utils/variables';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers<RootState>({
  [STATE_MODULES.AUTH]: authReducer,
  [STATE_MODULES.ALBUMS]: albumReducer,
  [STATE_MODULES.PHOTOS]: photosReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export {persistor, store};
