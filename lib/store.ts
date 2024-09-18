import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './features/counter';
import { moviesApi } from './services/movies';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice.reducer,
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
