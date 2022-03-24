import { combineReducers } from "redux";
import todoListReducer from "./todo-list";
export default combineReducers({
  toDoList: todoListReducer,
});
