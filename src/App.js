import './App.css';
import { useContext, useState } from 'react';
import { UserContext, UserContextProvider } from './reducers/user';
import UserList from './userList';

function App() {
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [phone, setPhone] = useState();
  const { dispatch } = useContext(UserContext);

  return (
    <div className="App">
      <header className="App-header">
        <p>Users:</p>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" placeholder="Name" onChange={event => setName(event.target.value)} />
        <label htmlFor="surname">Surname:</label>
        <input id="surname" type="text" placeholder="Surname" onChange={event => setSurname(event.target.value)} />
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone" onChange={event => setPhone(event.target.value)} list="defaultTels" />
        <datalist id="defaultTels">
          <option value="111-1111-1111" />
          <option value="122-2222-2222" />
          <option value="333-3333-3333" />
          <option value="344-4444-4444" />
        </datalist>
        <button onClick={() => {
          dispatch({ type: 'ADD_USER', user: { name, surname, phone } });
        }}>Add</button>
        <UserList />
      </header>
    </div>
  );
}

const AppWrapper = () => (
  <UserContextProvider>
    <App />
  </UserContextProvider>
);

export default AppWrapper;
