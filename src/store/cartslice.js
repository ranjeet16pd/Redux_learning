import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  // all thing we want to do in reducer we can do here
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      const itemIdToRemove = action.payload; // Assuming action.payload is the id of the item to remove
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },
  },
});
export const { addItems, removeItems } = cartSlice.actions;

export default cartSlice.reducer;
