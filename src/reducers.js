import { combineReducers } from "redux";
import { authenticateReducer } from "./component/login";
import { listOperation, searchCondition } from "./component/contact";


const contactApp = combineReducers({
  authenticateReducer,
  listOperation,
  searchCondition
});

export default contactApp;