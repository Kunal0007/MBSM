import { configureStore } from "@reduxjs/toolkit";
import { createLogicMiddleware } from "redux-logic";
import { collection, getDocs } from "firebase/firestore";

import magzineLogic from "../store/magzines/logic";
import magzineReducer from "../store/magzines/slice";

import { db } from "../firebase.config";

const deps = {
  db,
  getDocs,
  collection,
};

const logicArr = [...magzineLogic];

const logicMiddleware = createLogicMiddleware(logicArr, deps);

export default configureStore({
  reducer: {
    magzines: magzineReducer,
  },
  middleware: [logicMiddleware],
  devTools: true,
});
