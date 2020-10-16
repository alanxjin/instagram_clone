const replyReducer = (state = { toUsername: "", commentId: 0 }, action) => {
  switch (action.type) {
    case "REPLY_COMMENT":
      return { toUsername: action.toUsername, commentId: action.commentId };
    default:
      return state;
  }
};
export default replyReducer;
