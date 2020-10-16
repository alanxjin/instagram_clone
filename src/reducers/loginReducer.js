const LoginReducer = (state = "", action) => {
  switch (action.type) {
    case "UPDATE_LOGIN_USER":
      return action.username;
    default:
      return state;
  }
};
export default LoginReducer;
