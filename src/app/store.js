import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/Counter/counterSlice';

const rootReducer = {
  count: counterSlice,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
