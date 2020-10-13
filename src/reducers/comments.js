const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case "REPLY":
      return state;
    case "LIKE":
      return state;
    default:
      return state;
  }
};
export default commentsReducer;
