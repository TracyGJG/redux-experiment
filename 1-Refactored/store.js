// simplified createStore function
const createStore = (reducer, initialState) => {
  let listeners = [];
  let currentState = reducer(initialState, {});

  return {
    get state() {
      return currentState;
    },
    dispatch(action) {
      currentState = reducer(currentState, action);

      listeners.forEach((listener) => {
        listener();
      });
    },
    subscribe(newListener) {
      newListener();
      listeners.push(newListener);

      const unsubscribe = () => {
        listeners = listeners.filter((l) => l !== newListener);
      };

      return unsubscribe;
    },
  };
};
