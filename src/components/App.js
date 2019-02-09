import React, { Component } from 'react';
import { createStore } from 'redux';

const actionInc = { type: 'INCREMENT'};
const actionDec = { type: 'DECREMENT'};

function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch(actionInc);
store.dispatch(actionInc);
store.dispatch(actionInc);
store.dispatch(actionInc);

store.dispatch(actionDec);
store.dispatch(actionDec);
store.dispatch(actionDec);
store.dispatch(actionDec);

class App extends Component {
  render() {
    return <div>
      App
    </div>
  }
}

export default App;