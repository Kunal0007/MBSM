import { createLogic } from "redux-logic";
import get from "lodash/get";

import {
  fetchMagzines,
  fetchMagzinesSuccess,
  fetchMagzinesFail,
  searchFetch,
  searchFetchSuccess,
  searchFetchFail,
} from "./slice";

const fetchMagzinesLogic = createLogic({
  type: fetchMagzines.type,
  latest: true,

  async process({ db, getDocs, collection }, dispatch, done) {
    try {
      const data = await getDocs(collection(db, "magzines"));
      let magzine = [];
      magzine = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch(fetchMagzinesSuccess(magzine));
    } catch (err) {
      dispatch(
        fetchMagzinesFail(get(err, "response.data.error.message", err.message))
      );
    }
    done();
  },
});

const searchFetchLogic = createLogic({
  type: searchFetch.type,
  latest: true,

  async process({ db, getDocs, collection, getState, action }, dispatch, done) {
    try {
      const {
        magzines: { rawData },
      } = getState();
      const { value } = action.payload;
      let searchItems = [];

      for (let i = 0; i < rawData.length; i++) {
        let isFound = rawData[i].tags.indexOf(value);
        if (isFound > -1) {
          searchItems.push(rawData[i]);
        }
      }
      if (searchItems.length !== 0) {
        dispatch(searchFetchSuccess(searchItems));
      } else {
        dispatch(searchFetchFail("No result found"));
      }
    } catch (err) {
      dispatch(
        searchFetchFail(get(err, "response.data.error.message", err.message))
      );
    }
    done();
  },
});

export default [fetchMagzinesLogic, searchFetchLogic];
