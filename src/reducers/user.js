import { createContext, useReducer } from "react";

export const UserContext = createContext();

const reducer = (state, action) => {
  if (action.type === 'ADD_USER'){
    return {
      ...state,
      users: [...state.users, action.user],
    };
  }
  if (action.type === 'DELETE_USER'){
    return {
      ...state,
      users: state.users.filter(user => user.id !== action.id),
    };
  }

  return initialState;
};

const initialState = {
  users: [],
};

export const UserContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
