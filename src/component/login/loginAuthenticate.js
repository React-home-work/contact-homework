import { store } from "../../index";
import { LOGIN_SUCCESS } from "../../env_variable";

const loginAuthenticate = () => {
  return store.getState().authenticateReducer.loginState === LOGIN_SUCCESS;
};

export default loginAuthenticate;