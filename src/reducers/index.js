import { combineReducers } from "redux";
import commentsReducer from "./commentReducer";
import LoginReducer from "./loginReducer";
import ModalReducer from "./modal";
import portraitSlideIndReducer from "./portraitSlideIndReducer";
import postReducer from "./postReducer";
import replyReducer from "./replyReducer";

const rootReducer = combineReducers({
  comments: commentsReducer,
  post: postReducer,
  loginUser: LoginReducer,
  portraitSlideInd: portraitSlideIndReducer,
  reply: replyReducer,
  modal: ModalReducer,
});

export default rootReducer;
