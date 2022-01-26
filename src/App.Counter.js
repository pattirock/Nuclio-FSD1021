import './App.css';
import { useReducer } from 'react';

const reducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return { ...state, counter: state.counter + 1 };
  }

  if (action.type === 'DECREMENT') {
    return { ...state, counter: state.counter - 1 };
  }

  return initialState;
};
const initialState = {
  counter: 0,
  lastAction: null,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.debug(state);
  return (
    <div className="App">
      <header className="App-header">
        <p>Counter: {state.counter}</p>
        <button onClick={() => {
          dispatch({ type: 'INCREMENT' });
        }}>+</button>
        <button onClick={() => {
          dispatch({ type: 'DECREMENT' });
        }}>-</button>
      </header>
    </div>
  );
}

export default App;
