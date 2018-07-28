import { LOGED_IN } from "../types";

export const logUser = email => {
  const action = {
    type: LOGED_IN,
    email
  };
  return action;
};
