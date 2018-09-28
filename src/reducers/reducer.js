import { SET_PATH, SET_ROOT } from "../actions";

const initialState = {
  path: "/",
  root: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PATH:
      return { ...state, path: "/" + action.payload.path };
    case SET_ROOT:
      console.log(action.payload.root);
      return { ...state, root: action.payload.root };
    default:
      break;
  }
  return state;
};

export default reducer;
