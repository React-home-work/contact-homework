import { combineReducers } from "redux";
import { store } from './index';

let defaultUser = {
  userName: "Admin",
  passWd: "123",
  loginState: false
};

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

export const listOperate = (state = [], action) => {
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

const contactApp = combineReducers({
  authenticate,
  listOperate
});

export default contactApp;
