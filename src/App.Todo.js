import './App.css';
import { useReducer, useState } from 'react';
import { ACTIONS_TYPES, initialState, reducer } from './reducers/todo';

function App() {
  const [taskValue, setTaskValue] = useState();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tasks } = state;

  return (
    <div className="App">
      <header className="App-header">
        <p>TODO List:</p>
        <input value={taskValue} type="text" placeholder="Text" onChange={event => setTaskValue(event.target.value)} />
        <button onClick={() => {
          dispatch({ type: ACTIONS_TYPES.ADD, taskValue: taskValue });
          setTaskValue('');
        }}>Add</button>
        {tasks.length === 0 ? <p>No tasks</p> : tasks.map(task => (
          <>
            <p>{task.value}</p>
            <button onClick={() => dispatch({ type: ACTIONS_TYPES.DELETE, id: task.id })}>X</button>
          </>
        ))}
      </header>
    </div>
  );
}

export default App;
