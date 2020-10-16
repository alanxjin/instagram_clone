import { combineReducers } from "redux";
import commentsReducer from "./comments";
import LoginReducer from "./login";
import postReducer from "./post";

const rootReducer = combineReducers({
  comments: commentsReducer,
  post: postReducer,
  loginUser: LoginReducer,
});

export default rootReducer;
