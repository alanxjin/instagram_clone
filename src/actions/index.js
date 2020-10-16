export const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const like = (commentId) => {
  return {
    type: "LIKE",
    commentId,
  };
};

export const reply = (commentId = "", author, text, timestamp) => {
  return {
    type: "REPLY",
    commentId,
    author,
    text,
    timestamp,
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
