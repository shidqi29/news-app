import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "../slices/newsSlice";

const store = configureStore({
  reducer: {
    news: newsSlice,
  },
});

export default store;
