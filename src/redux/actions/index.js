import { LOGED_IN, SET_TASKS } from "../types";

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
