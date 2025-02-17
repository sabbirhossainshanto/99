import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  group: 4,
  homeTab: "inPlay",
};

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setGroup: (state, action) => {
      state.group = action.payload;
    },
    setHomeTab: (state, action) => {
      state.homeTab = action.payload;
    },
  },
});

export const { setGroup, setHomeTab } = stateSlice.actions;

export default stateSlice.reducer;
