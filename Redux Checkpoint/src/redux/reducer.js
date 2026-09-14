import {
  ADD_TASK,
  TOGGLE_TASK,
  EDIT_TASK,
  FILTER_TASKS,
  DELETE_TASK,
} from './actionTypes';

/**
 * Initial state containing default tasks with id, description, and isDone.
 */
const initialState = {
  tasks: [
    {
      id: '1',
      description: 'Master Redux state container & action flow',
      isDone: true,
    },
    {
      id: '2',
      description: 'Implement AddTask, ListTask, and Task components',
      isDone: true,
    },
    {
      id: '3',
      description: 'Filter tasks by completion status (All, Done, Not Done)',
      isDone: false,
    },
    {
      id: '4',
      description: 'Test inline task description editing feature',
      isDone: false,
    },
  ],
  filter: 'ALL', // 'ALL' | 'DONE' | 'NOT_DONE'
};

/**
 * Reducer function managing task state transitions immutably.
 */
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isDone: !task.isDone }
            : task
        ),
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description }
            : task
        ),
      };

    case FILTER_TASKS:
      return {
        ...state,
        filter: action.payload,
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};

export default taskReducer;
