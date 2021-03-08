import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "errorSlice",
  initialState: {
    error: null,
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;
