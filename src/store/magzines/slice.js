import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  magzineLoading: null,
  rawData:[],
  magzines: [],
  error: "",
  searchLoading: false,
  searchStatus: "",
  searchedArray: [],
};

const magzineSlice = createSlice({
  name: "magzines",
  initialState,
  reducers: {
    fetchMagzines(state, { payload }) {
      state.magzineLoading = true;
    },
    fetchMagzinesSuccess(state, { payload }) {
      state.rawData = payload
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
      state.magzineLoading = false;
    },
    fetchMagzinesFail(state, { payload }) {
      state.magzineLoading = false;
      state.error = payload;
    },
    searchFetch(state) {
      state.searchLoading = true;
    },
    searchFetchSuccess(state, { payload }) {
      state.searchedArray = payload;
      state.searchLoading = false;
    },
    searchFetchFail(state, { payload }) {
      state.searchStatus = payload;
      state.searchLoading = false;
    },
    removeStatus(state) {
      state.searchStatus = "";
      state.searchedArray = []
      state.searchLoading = false
    },
  },
});

export const {
  fetchMagzines,
  fetchMagzinesSuccess,
  fetchMagzinesFail,
  searchFetch,
  searchFetchSuccess,
  searchFetchFail,
  removeStatus
} = magzineSlice.actions;

export default magzineSlice.reducer;
