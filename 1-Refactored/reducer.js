// Redux architecture pieces
const countReducer = (state, { type }) => {
  switch (type) {
    case actions.increment.type:
      return {
        count: state.count + 1,
      };

    case actions.decrement.type:
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
};
