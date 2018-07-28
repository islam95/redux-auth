import { SET_COMPLETED_TASKS } from "../types";

export default (state = [], action) => {
  switch (action.type) {
    case SET_COMPLETED_TASKS:
      const { completedTasks } = action;
      return completedTasks
    default:
      return state;
  }
};
