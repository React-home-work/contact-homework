import { combineReducers } from "redux";
import { authenticateReducer } from "./component/login";

let initialTab = {
  tabName: "TabA"
};

// for fake use
let listItemFake = [
  {name: "A", phone: 1},
  {name: "A", phone: 2},
  {name: "A", phone: 3},
  {name: "A", phone: 4},
  {name: "A", phone: 5},
  {name: "A", phone: 6},
  {name: "A", phone: 7},
  {name: "A", phone: 8},
  {name: "A", phone: 9},
  {name: "A", phone: 10},
  {name: "A", phone: 11},
  {name: "A", phone: 12},
  {name: "A", phone: 13},
  {name: "A", phone: 14},
  {name: "A", phone: 15},
  {name: "A", phone: 16}
];


//fot test-use
export const listOperation = (state = listItemFake, action) => {
    switch(action.type){
        case "ADD_ONE":
            return [
                ...state,
                {
                    name: action.name,
                    phone: action.phone
                }
            ];
        case "GET_LIST":
            return state;
        default:
            return state;
    }
};
 
export const tabChange = (state = initialTab, action) => {
  switch(action.type) {
    case "CHANGE_TAB":
      return {tabName: action.tabName};
    default:
      return state;
  }
};

export const searchCondition = (state = "", action) => {
  switch(action.type) {
    case "SET_SEARCH_CONDITION":
      return action.condition;
    default:
      return state;
  }
};

const contactApp = combineReducers({
  authenticateReducer,
  listOperation,
  tabChange,
  searchCondition
});

export default contactApp;

export const reducers = {
  authenticateReducer,
};