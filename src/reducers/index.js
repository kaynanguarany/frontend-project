import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer";
import BoardReducer from "./BoardReducer";

export default combineReducers({
  home: HomeReducer,
  board: BoardReducer
});
