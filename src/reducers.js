import { combineReducers } from "redux";
import { store } from './index';

let defaultUser = {
  userName: "Admin",
  passWd: "123",
  loginState: false
};

let initialTab = {
  tabName: "TabA"
}

export const authenticate = (state = defaultUser, action) => {
  switch (action.type) {
    case "AUTHENTICATE_USER":
        // console.log(action.userName, state.userName,action.userName === state.userName, 'name');
        // console.log(action.userName === state.userName &&
        //     action.passWd === state.passWd);
      if (
        action.userName === state.userName &&
        action.passWd === state.passWd
      ) {
        // console.log('进入reducer目标逻辑');
        
        return Object.assign({}, state, {
          ...state,
          loginState: true
        });
        // console.log(state, 'state');
        // console.log(Object.assign({}, state, {
        //        ...state,
        //        loginState: true
        //      }), 'return state');
        //      return state;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export const listOperation = (state = [], action) => {
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
}
 
export const tabChange = (state = initialTab, action) => {
  switch(action.type) {
    case "CHANGE_TAB":
      return {tabName: action.tabName}
    default:
      return state;
  }
}

export const searchCondition = (state = "", action) => {
  switch(action.type) {
    case "SET_SEARCH_CONDITION":
      console.log(state, "SET_SEARCH_CONDITION")
      return action.condition;
    default:
      return state;
  }
}

const contactApp = combineReducers({
  authenticate,
  listOperation,
  tabChange,
  searchCondition
});

export default contactApp;
