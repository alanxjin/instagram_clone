const portraitSlideIndReducer = (state = 0, action) => {
  switch (action.type) {
    case "UPDATE_SLIDE_IND":
      return action.ind;
    default:
      return state;
  }
};
export default portraitSlideIndReducer;
