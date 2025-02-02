import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import CryptoJS from "crypto-js";

const saveToLocalStorage = (state) => {
  const serializedUid = CryptoJS.AES.encrypt(
    JSON.stringify(state.authUser),
    "my-secret-key"
  ).toString();

  typeof window !== "undefined" && localStorage.setItem("auth", serializedUid);
};

const checkLocalStorage = () => {
  if (typeof window === "undefined") {
    return;
  }
  const serializedUid = localStorage.getItem("auth");
  if (serializedUid === null) return undefined;
  return {
    authUser: JSON.parse(
      CryptoJS.AES.decrypt(serializedUid, "my-secret-key").toString(
        CryptoJS.enc.Utf8
      )
    ),
  };
};

const enhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

let store = createStore(
  rootReducer,
  checkLocalStorage(),
  enhancers(applyMiddleware(thunk))
);
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
