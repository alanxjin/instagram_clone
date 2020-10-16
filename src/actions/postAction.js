export const updatePost = (postInfo) => {
  return {
    type: "UPDATE_POST",
    postInfo,
  };
};
