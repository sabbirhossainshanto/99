import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  group: 0,
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setGroup: (state, action) => {
      state.group = action.payload;
    },
  },
});

export const { setGroup } = stateSlice.actions;

export default stateSlice.reducer;
