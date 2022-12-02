import { createLogic } from "redux-logic";
import get from "lodash/get";

import {
  fetchMagzines,
  fetchMagzinesSuccess,
  fetchMagzinesFail,
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

export default [
  fetchMagzinesLogic,
];
