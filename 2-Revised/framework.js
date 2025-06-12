import { subscribe } from "./store.js";

// DOM elements
export default function wireUpDom(stateStore) {
  // Wire click events to actions
  document.querySelectorAll("button[data-action]").forEach((el) =>
    el.addEventListener("click", () => {
      stateStore.dispatch(el.dataset.action);
    })
  );

  // Initialize UI display
  // Update UI when an action fires
  document.querySelectorAll("[data-value]").forEach((el) => {
    subscribe(() => {
      el.innerHTML = stateStore.state[el.dataset.value];
    });
  });
}
