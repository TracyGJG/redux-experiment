export const ACTIONS = {
  INCREMENT(state) {
    return { count: state.count + 1 };
  },
  DECREMENT(state) {
    return { count: state.count - 1 };
  },
};
