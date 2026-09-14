import {
  ADD_TASK,
  TOGGLE_TASK,
  EDIT_TASK,
  FILTER_TASKS,
  DELETE_TASK,
} from './actionTypes';

/**
 * Action creator to add a new task.
 * Every task has the attributes: id, description, isDone.
 * @param {string} description - The task text description
 */
export const addTask = (description) => ({
  type: ADD_TASK,
  payload: {
    id: Date.now().toString() + '-' + Math.random().toString(36).substring(2, 7),
    description: description.trim(),
    isDone: false,
  },
});

/**
 * Action creator to toggle a task's isDone status.
 * @param {string|number} id - Unique ID of the task to toggle
 */
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

/**
 * Action creator to edit an existing task's description.
 * @param {string|number} id - Unique ID of the task
 * @param {string} description - New description text
 */
export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: {
    id,
    description: description.trim(),
  },
});

/**
 * Action creator to set the active filter.
 * @param {'ALL'|'DONE'|'NOT_DONE'} filter - Filter category
 */
export const filterTasks = (filter) => ({
  type: FILTER_TASKS,
  payload: filter,
});

/**
 * Action creator to delete a task.
 * @param {string|number} id - Unique ID of the task to remove
 */
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});
