import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
    },
    incItemQuantity(state, action) {
      const item = state.cart.find((pizza) => pizza.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decItemQuantity(state, action) {
      const item = state.cart.find((pizza) => pizza.pizzaId === action.payload);

      if (item.quantity === 1) {
        // Remove the item from the cart when its quantity reaches 0
        state.cart = state.cart.filter(
          (pizza) => pizza.pizzaId !== action.payload,
        );
      } else {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  incItemQuantity,
  decItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getPizzaQuantityByID = (id) => (state) => {
  const pizza = state.cart.cart.find((pizza) => pizza.pizzaId === id);
  return pizza ? pizza.quantity : 0; // Return 0 if the pizza is not in the cart
};

export const getTotalCartItems = (state) => {
  return state.cart.cart.reduce((total, item) => total + item.quantity, 0);
};

export const getTotalCartPrice = (state) => {
  return state.cart.cart.reduce((price, item) => price + item.totalPrice, 0);
};
