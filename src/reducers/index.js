import { combineReducers } from "redux";
import commentsReducer from "./commentReducer";
import LoginReducer from "./loginReducer";
import portraitSlideIndReducer from "./portraitSlideIndReducer";
import postReducer from "./postReducer";
import replyReducer from "./replyReducer";

const rootReducer = combineReducers({
  comments: commentsReducer,
  post: postReducer,
  loginUser: LoginReducer,
  portraitSlideInd: portraitSlideIndReducer,
  reply: replyReducer,
});

export default rootReducer;
