import { createSlice } from "@reduxjs/toolkit";

const productsDataSlice = createSlice({
  name: "productsData",
  initialState: {},
  reducers: {
    setProductsData: (state, action) => {
      return action.payload;
    },
    addItem: (state, action) => {
      
    },
    updateItem: (state, action) => {
      
    },
    removeItem: (state, action) => {
      
    },
  },
});

export const { setProductsData,addItem, updateItem, removeItem } = productsDataSlice.actions;
export default productsDataSlice.reducer;