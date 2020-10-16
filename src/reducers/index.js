import { combineReducers } from "redux";
import commentsReducer from "./comments";
import LoginReducer from "./login";
import portraitSlideIndReducer from "./portraitSlideInd";
import postReducer from "./post";

const rootReducer = combineReducers({
  comments: commentsReducer,
  post: postReducer,
  loginUser: LoginReducer,
  portraitSlideInd: portraitSlideIndReducer,
});

export default rootReducer;
