import { createSlice } from "@reduxjs/toolkit";

const cartUiSlice = createSlice({
  name: 'cartUI',
  initialState: { isvisible: false },

  reducers: {
    toggle(state) {
      state.isvisible = !state.isvisible;
    }
  }
});

export const cartUiActions = cartUiSlice.actions;

export default cartUiSlice.reducer;