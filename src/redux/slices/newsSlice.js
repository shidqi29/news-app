import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    saved: [],
  },
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    saveNews: (state, action) => {
      const filterSavedNews = state.data.saved.find(
        (item) => item.title === action.payload.title,
      );
      if (filterSavedNews) {
        const filtered = state.data.saved.filter(
          (item) => item.title !== filterSavedNews.title,
        );
        state.data.saved = filtered;
      } else {
        state.data.saved.push(action.payload);
      }
    },
  },
});

export const { saveNews } = newsSlice.actions;
export default newsSlice.reducer;
