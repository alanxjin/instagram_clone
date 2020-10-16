import { combineReducers } from "redux";
import commentsReducer from "./comments";
import LoginReducer from "./login";
import portraitSlideIndReducer from "./portraitSlideInd";
import postReducer from "./post";
import replyReducer from "./reply";

const rootReducer = combineReducers({
  comments: commentsReducer,
  post: postReducer,
  loginUser: LoginReducer,
  portraitSlideInd: portraitSlideIndReducer,
  reply: replyReducer,
});

export default rootReducer;
