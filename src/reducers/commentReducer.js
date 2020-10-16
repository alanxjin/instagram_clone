const commentsReducer = (state = [], action) => {
  const newState = [...state];
  switch (action.type) {
    case "CREATE_COMMENT":
      newState.push(action.comment);
      if (action.toCommentId !== 0) {
        const toComment = newState.find(
          (comment) => comment.id === action.toCommentId
        );
        toComment["replied"].push(action.comment.id);
      }
      return newState;
    case "LIKE_COMMENT":
      const comment = newState.find(
        (comment) => comment.id === action.commentId
      );
      if (!comment.liked.includes(action.username)) {
        comment.liked.push(action.username);
      } else {
        const index = comment.liked.indexOf(action.username);
        if (index > -1) {
          comment.liked.splice(index, 1);
        }
      }
      return newState;
    default:
      return state;
  }
};
export default commentsReducer;
