import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 1,
  isCartOpen: false,
  items: [],
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count === 1) return;
      state.count -= 1;
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addToCart: (state, action) => {
        if(state.cart.find(item => item._id === action.payload._id)) return
      state.cart = [...state.cart, action.payload.item];
    },
    removeFromCart: (state, action) => {
        state.cart = state.cart.filter((item) => item._id !== action.payload._id);
      }
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, setIsCartOpen, addToCart, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
