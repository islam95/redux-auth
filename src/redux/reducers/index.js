import { combineReducers } from "redux";
import user from "./reducerUser";
import tasks from "./reducerTasks";

export default combineReducers({
  user,
  tasks
})