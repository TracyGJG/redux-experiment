import { ACTIONS } from "./actions.js";

// Redux architecture pieces
const countReducer = (state, action) => ACTIONS[action]?.(state) ?? state;

export default countReducer;
