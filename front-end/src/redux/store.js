import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productsDataReducer from './productsDataSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    productsData : productsDataReducer
  }
});

export default store;