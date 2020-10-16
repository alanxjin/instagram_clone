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

// export const getComment = (commentId) => {
//   const serializedComments = localStorage.getItem("comments");
//   if (serializedComments === null) {
//     return undefined;
//   }
//   return JSON.parse(serializedComments).filter(
//     (comment) => comment.id === commentId
//   );
// };

// sort: 1 => ascending, 0 => not sorting, -1: descending
export const getComments = (
  postId,
  isDirectReply = false,
  sortByTimestamp = 1,
  sortByLike = -1,
  limit = -1
) => {
  // const serializedComments = localStorage.getItem("comments");
  // if (serializedComments === null) {
  //   return [];
  // }
  //const comments = JSON.parse(serializedComments).filter(
  //  (comment) => comment.postId === postId
  //);

  let comments = [
    { likes: [12, 3], timestamp: 1234 },
    { likes: [12, 3, 45, 4], timestamp: 1234 },
    { likes: [12, 3, 45, 4], timestamp: 1000 },
  ];

  comments.filter(
    (comment) =>
      comment.postId === postId && comment.isDirectReply === isDirectReply
  );

  comments.sort((comment1, comment2) => {
    const likeCompare =
      sortByLike * (comment1.likes.length - comment2.likes.length) ||
      sortByTimestamp * (comment1.timestamp - comment2.timestamp);
    return likeCompare;
  });

  if (limit >= 0) {
    return comments.splice(0, limit);
  }
  return comments;
};

export const getCommentCount = (postId) => {
  // const serializedComments = localStorage.getItem("comments");
  // if (serializedComments === null) {
  //   return [];
  // }
  //const comments = JSON.parse(serializedComments).filter(
  //  (comment) => comment.postId === postId
  //);

  let comments = [
    { likes: [12, 3], timestamp: 1234 },
    { likes: [12, 3, 45, 4], timestamp: 1234 },
    { likes: [12, 3, 45, 4], timestamp: 1000 },
  ];

  return comments.length;
};
