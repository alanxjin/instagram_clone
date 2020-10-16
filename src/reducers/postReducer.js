const defaultSate = {
  username: "unkown",
  description: "",
  likes: 0,
  timestamp: 978307200000,
};
const postReducer = (state = defaultSate, action) => {
  switch (action.type) {
    case "UPDATE_POST":
      return action.postInfo;
    default:
      return state;
  }
};
export default postReducer;
