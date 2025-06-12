let listeners = [];

// simplified createStore function
export function createStore(reducer, initialState) {
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
  };
}

export function subscribe(newListener) {
  newListener();
  listeners.push(newListener);

  const unsubscribe = () => {
    listeners = listeners.filter((l) => l !== newListener);
  };

  return unsubscribe;
}
