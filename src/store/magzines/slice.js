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
      let magzineByYear = [];
      let startingYear = 2014;
      while (startingYear) {
        const items = payload.filter(
          (item) => item.year.indexOf(startingYear) !== -1
        );
        if (items.length === 0) {
          break;
        } else {
          const obj = { year: startingYear, data: items };
          magzineByYear.push(obj);
          startingYear++;
        }
      }
      state.magzines = magzineByYear;
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
