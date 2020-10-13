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
