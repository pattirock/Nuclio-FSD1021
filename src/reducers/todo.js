export const ACTIONS_TYPES = {
  DELETE: 'DELETE_TASK',
  ADD: 'ADD_TASK',
};

export const initialState = {
  tasks: [],
};

export const reducer = (state, action) => {
  if (action.type === ACTIONS_TYPES.ADD) {
    const lastIndex = state.tasks.length;
    return {
      ...state,
      tasks: [...state.tasks, { id: lastIndex + 1, value: action.taskValue }],
    };
  }
  if (action.type === ACTIONS_TYPES.DELETE) {
    return {
      ...state,
      tasks: state.tasks.filter(task => task.id !== action.id),
    };
  }
  return initialState;
};
