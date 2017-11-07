import { combineReducers } from "redux";
import { authenticateReducer } from "./component/login";
import { listOperation, tabChange, searchCondition } from "./component/contact";


const contactApp = combineReducers({
  authenticateReducer,
  listOperation,
  tabChange,
  searchCondition
});

export default contactApp;

export const reducers = {
  authenticateReducer,
  listOperation,
  tabChange,
  searchCondition
};