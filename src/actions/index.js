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

export const replyComment = (commentId, toUsername) => {
  return {
    type: "REPLY_COMMENT",
    commentId,
    toUsername,
  };
};

export const updatePost = (postInfo) => {
  return {
    type: "UPDATE_POST",
    postInfo,
  };
};

export const updateLoginUser = (username) => {
  return {
    type: "UPDATE_LOGIN_USER",
    username,
  };
};

export const updateSlideInd = (ind) => {
  return {
    type: "UPDATE_SLIDE_IND",
    ind,
  };
};
