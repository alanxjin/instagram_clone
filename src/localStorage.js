function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
export const createComment = (comment, toCommentId = 0) => {
  const oldSerializedComments = localStorage.getItem("comments") ?? "{}";
  const comments = JSON.parse(oldSerializedComments);
  let commentId = uuidv4();
  while (commentId in comments) {
    commentId = uuidv4();
  }
  comment["id"] = commentId;
  comment["timestamp"] = +new Date();
  comment["liked"] = [];
  comment["replied"] = [];

  comments[commentId] = comment;
  if (toCommentId !== 0) {
    const toComment = comments[toCommentId];
    toComment["replied"].push(comment.id);
  }
  const serializedComments = JSON.stringify(comments);
  localStorage.setItem("comments", serializedComments);
  return comment;
};

export const likeComment = (commentId, username) => {
  let oldSerializedComments = localStorage.getItem("comments") ?? "{}";
  const comments = JSON.parse(oldSerializedComments);
  const comment = comments[commentId];
  if (!comment.liked.includes(username)) {
    comment.liked.push(username);
  } else {
    const index = comment.liked.indexOf(username);
    if (index > -1) {
      comment.liked.splice(index, 1);
    }
  }
  const serializedComments = JSON.stringify(comments);
  localStorage.setItem("comments", serializedComments);
  return comment;
};

export const updateComment = (commentId, commentInfo) => {
  let oldSerializedComments = localStorage.getItem("comments") ?? "{}";
  const comments = JSON.parse(oldSerializedComments);
  comments[commentId] = commentInfo;
  const serializedComments = JSON.stringify(comments);
  localStorage.setItem("comments", serializedComments);
};

export const getComments = () => {
  const serializedComments = localStorage.getItem("comments");
  if (serializedComments === null) {
    return [];
  }
  const comments = Object.values(JSON.parse(serializedComments));
  return comments;
};
