import { useContext } from "react";
import { UserContext } from "./reducers/user";

const UserList = () => {
  const { state, dispatch } = useContext(UserContext);
  const { users } = state;

  return (
    <div>
      {users.length === 0 ? <p>No users</p> : users.map(user => (
        <div>
          <p>{user.name} {user.surname} TLF: {user.phone}</p>
          <button onClick={() => dispatch({ type: 'DELETE_USER', id: user.id })}>X</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
