import { EMAIL_CHANGED } from "../actions/type"; 
const INITIAL_STATE = { email:'' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
    
    default:
      return state;
  }
};
