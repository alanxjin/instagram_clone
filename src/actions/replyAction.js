export const replyComment = (commentId, toUsername) => {
  return {
    type: "REPLY_COMMENT",
    commentId,
    toUsername,
  };
};
