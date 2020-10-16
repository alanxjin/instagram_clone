export const createComment = (comment, toCommentId) => {
  return {
    type: "CREATE_COMMENT",
    comment,
    toCommentId,
  };
};

export const likeComment = (commentId, username) => {
  return {
    type: "LIKE_COMMENT",
    commentId,
    username,
  };
};
