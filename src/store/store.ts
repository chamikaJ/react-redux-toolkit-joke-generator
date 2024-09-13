import { configureStore } from '@reduxjs/toolkit';
import { jokeReducer } from '../reducers/jokeReducer';

// Set up the store using configureStore
export const store = configureStore({
  reducer: jokeReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Optional: add more middleware if needed
});

// Infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
