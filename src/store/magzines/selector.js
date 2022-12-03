export const magzinesSelector = (state) => state.magzines.magzines;

export const magzineLoadingSelector = (state) => state.magzines.magzineLoading;

export const SearchmagzinesSelector = (state) => state.magzines.searchedArray;

export const SearchmagzineLoadingSelector = (state) =>
  state.magzines.searchLoading;

export const SearchmagzineStatusSelector = (state) =>
  state.magzines.searchStatus;
