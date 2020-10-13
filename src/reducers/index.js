import commentsReducer from "./comments";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  comments: commentsReducer,
});

export default allReducers;
