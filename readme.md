# How to Implement Redux in 24 Lines of JavaScript

[Original article](https://www.freecodecamp.org/news/redux-in-24-lines-of-code/) By Yazeed Bzadough. [Github repo](https://github.com/yazeedb/implement-redux-counter-app)

## Thoughts on the original code

1. All the JS source code is contained iun the HTML file. I would prefer to break the code out into separate concerns.
2. Updating DOM elements and registering click events is normally something a JS framework would manage.
3. When configuring a REDUX store, we need to define three specific elements:
   - The Actions that can update state.
   - The Reducer that maintains the state.
   - The Store that conatins the state.

## Mark One: Refactored

The code within the HTML file is reduced to creating the store using the defined reducer (countReducer) and an initial state `{ count: 0 }`.

The remaining code has been relocated into separate (actions, reducers, store and framework) files.

The simulate having a JS framework to wire-up the DOM the HTML elements have been augmented with `data` attributes to define actions to be envoked when the element is clicked, and elements to be refreshed with a stipulated value from the state model.

All four external JS files are loaded using conventional HTML `script` elements, not using ES6 modules (that is coming up.)
