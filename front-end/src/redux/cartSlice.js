import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const item = state.find((item) => item.product.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        return;
      }
      state.push({ product: action.payload, quantity: 1 });
    },
    updateItem: (state, action) => {
      const index = state.findIndex((i) => i.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    removeItem: (state, action) => {
      const item = state.find((item) => item.product.id === action.payload.id);

      if (item) {
        item.quantity -= 1;

        // If quantity is zero, remove the item using `splice()`
        if (item.quantity === 0) {
          const index = state.findIndex(
            (i) => i.product.id === action.payload.id
          );
          if (index !== -1) state.splice(index, 1);
        }
      }
    },
  },
});

export const { addItem, updateItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
