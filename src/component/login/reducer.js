import { LOGIN_SUCCESS, HAVE_NOT_LOGIN, LOGIN_FAIL } from "../../env_variable";


let defaultUser = {
  userName: "Admin",
  passWd: "123",
  loginState: HAVE_NOT_LOGIN
};

export default  (state = defaultUser, action) => {
  switch (action.type) {
    case "AUTHENTICATE_USER":
      if (
        action.userName === state.userName &&
        action.passWd === state.passWd
      ) {
        return Object.assign({}, state, {
          ...state,
          loginState: LOGIN_SUCCESS
        });
      } else {
        return Object.assign({}, state, {
          ...state,
          loginState: LOGIN_FAIL
        });
      }
    default:
      return state;
  }
};
