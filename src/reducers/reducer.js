import { SET_PATH, SET_ROOT } from "../actions";
import initialState from "./defaultState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PATH:
      return { ...state, path: action.payload.path };
    case SET_ROOT:
      return { ...state, root: action.payload.root };
    default:
      break;
  }
  return state;
};

export default reducer;
