import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      const { displayName, photoURL, email, uid } = action.payload;
      state.user = { displayName, photoURL, email, uid };
    },
    setUserToNull: (state, action) => {
      state.user = null;
    },
  },
});

export const { setUser, setUserToNull } = userSlice.actions;

export const userSelector = (state) => state.userSlice.user;
export const isUserSelector = (state) => !!state.userSlice.user;
export const photoUrlSelector = (state) => state.userSlice.user?.photoURL;

export default userSlice.reducer;
