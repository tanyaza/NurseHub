import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './orderSlice';
import toastSlice from './toastSlice';

export default configureStore({
  reducer: {
    order: orderSlice,
    toast: toastSlice
  }
})