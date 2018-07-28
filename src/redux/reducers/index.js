import { LOGED_IN } from "../types";

let user = {
  email: null
};

export default (state = user, action) => {
  switch (action.type) {
    case LOGED_IN:
      const { email } = action;
      user = { email };
      return user;
    default:
      return state;
  }
};
