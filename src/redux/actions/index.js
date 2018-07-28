import { LOGED_IN, SET_TASKS, SET_COMPLETED_TASKS } from "../types";

export const logUser = email => {
  const action = {
    type: LOGED_IN,
    email
  };
  return action;
};

export const setTasks = tasks => {
  return {
    type: SET_TASKS,
    tasks
  };
};

export const setCompletedTasks = completedTasks => {
  return {
    type: SET_COMPLETED_TASKS,
    completedTasks
  };
};