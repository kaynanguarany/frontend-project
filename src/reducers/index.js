import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer";
import BoardReducer from "./BoardReducer";
import UrlLocatorReducer from "./UrlLocatorReducer";

export default combineReducers({
  home: HomeReducer,
  board: BoardReducer,
  urlLocator: UrlLocatorReducer
});
