function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
export const createComment = (commentInfo) => {
  const oldSerializedComments = localStorage.getItem("comments") ?? "{}";
  const comments = JSON.parse(oldSerializedComments);
  let commentId = uuidv4();
  while (commentId in comments) {
    commentId = uuidv4();
  }
  commentInfo["id"] = commentId;
  commentInfo["timestamp"] = +new Date();

  comments[commentId] = commentInfo;
  const serializedComments = JSON.stringify(comments);
  localStorage.setItem("comments", serializedComments);
};

export const updateComment = (commentId, commentInfo) => {
  let oldSerializedComments = localStorage.getItem("comments") ?? "{}";
  const comments = JSON.parse(oldSerializedComments);
  comments[commentId] = commentInfo;
  const serializedComments = JSON.stringify(comments);
  localStorage.setItem("comments", serializedComments);
};

export const getComment = (commentId) => {
  try {
    const serializedComments = localStorage.getItem("comments");
    if (serializedComments === null) {
      return undefined;
    }
    return JSON.parse(serializedComments)[commentId];
  } catch (err) {
    return undefined;
  }
};

export const getAllComments = () => {
  try {
    const serializedComments = localStorage.getItem("comments");
    if (serializedComments === null) {
      return undefined;
    }
    return JSON.parse(serializedComments);
  } catch (err) {
    return undefined;
  }
};
