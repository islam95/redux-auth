import { combineReducers } from "redux";
import user from "./reducerUser";
import tasks from "./reducerTasks";
import completeTasks from "./reducerCompletedTasks";

export default combineReducers({
  user,
  tasks,
  completeTasks
});
