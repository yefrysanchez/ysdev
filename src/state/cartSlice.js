import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  items: [],
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload._id) {
          item.count++;
        }
        return item;
      });
    },
    decrement: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload._id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload._id);
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  setIsCartOpen,
  addToCart,
  removeFromCart,
  setItems,
} = cartSlice.actions;

export default cartSlice.reducer;
