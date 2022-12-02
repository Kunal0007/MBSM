import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  magzineLoading: null,
  magzines: [],
  error: "",
};

const magzineSlice = createSlice({
  name: "magzines",
  initialState,
  reducers: {
    fetchMagzines(state, { payload }) {
      state.magzineLoading = true;
    },
    fetchMagzinesSuccess(state, { payload }) {
      state.magzineLoading = false;
      state.magzines = payload;
    },
    fetchMagzinesFail(state, { payload }) {
      state.magzineLoading = false;
      state.error = payload;
    },
  },
});

export const { fetchMagzines, fetchMagzinesSuccess, fetchMagzinesFail } =
  magzineSlice.actions;

export default magzineSlice.reducer;
