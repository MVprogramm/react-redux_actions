import { ADD, DELETE } from "./users.actions.js";

const initialState = {
  userList: [],
}

export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      return {
        userList: state.userList.concat(action.payload),
      };
    case DELETE:
      return {
        userList: state.userList.filter(user => user.id !== action.payload),
      };
    default:
      return state;
  }
}

