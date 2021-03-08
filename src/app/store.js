import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import errorReducer from "./reducers/errorSlice";
export default configureStore({
  reducer: {
    userSlice: userReducer,
    errorSlice: errorReducer,
  },
});
