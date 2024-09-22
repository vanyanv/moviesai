import { configureStore } from '@reduxjs/toolkit';

import { moviesApi } from './services/movies';
import { searchSlice } from './features/search';
import { historySlice } from './features/searchHistory';

export const makeStore = () => {
  return configureStore({
    reducer: {
      search: searchSlice.reducer,
      searchHistory: historySlice.reducer,
      [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(moviesApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
