import { legacy_createStore as createStore } from 'redux';
import taskReducer from './redux/reducer';
import * as actions from './redux/actions';
import * as types from './redux/actionTypes';

describe('Redux Checkpoint — State & Action Tests', () => {
  let store;

  beforeEach(() => {
    store = createStore(taskReducer);
  });

  test('Initial state contains default tasks with id, description, isDone', () => {
    const state = store.getState();
    expect(state.tasks.length).toBeGreaterThan(0);
    expect(state.filter).toBe('ALL');

    state.tasks.forEach((task) => {
      expect(task.id).toBeDefined();
      expect(typeof task.description).toBe('string');
      expect(typeof task.isDone).toBe('boolean');
    });
  });

  test('ADD_TASK action creator and reducer add new task', () => {
    const beforeCount = store.getState().tasks.length;
    store.dispatch(actions.addTask('New Practice Task'));

    const state = store.getState();
    expect(state.tasks.length).toBe(beforeCount + 1);

    const added = state.tasks[0];
    expect(added.description).toBe('New Practice Task');
    expect(added.isDone).toBe(false);
    expect(added.id).toBeDefined();
  });

  test('TOGGLE_TASK action flips isDone status', () => {
    const initialTask = store.getState().tasks[0];
    const initialStatus = initialTask.isDone;

    store.dispatch(actions.toggleTask(initialTask.id));
    const toggled = store.getState().tasks.find((t) => t.id === initialTask.id);
    expect(toggled.isDone).toBe(!initialStatus);

    store.dispatch(actions.toggleTask(initialTask.id));
    const toggledBack = store.getState().tasks.find((t) => t.id === initialTask.id);
    expect(toggledBack.isDone).toBe(initialStatus);
  });

  test('EDIT_TASK action updates description of specified task', () => {
    const targetTask = store.getState().tasks[0];
    store.dispatch(actions.editTask(targetTask.id, 'Updated Task Name'));

    const updated = store.getState().tasks.find((t) => t.id === targetTask.id);
    expect(updated.description).toBe('Updated Task Name');
  });

  test('FILTER_TASKS action sets filter to DONE, NOT_DONE, and ALL', () => {
    store.dispatch(actions.filterTasks('DONE'));
    expect(store.getState().filter).toBe('DONE');

    store.dispatch(actions.filterTasks('NOT_DONE'));
    expect(store.getState().filter).toBe('NOT_DONE');

    store.dispatch(actions.filterTasks('ALL'));
    expect(store.getState().filter).toBe('ALL');
  });

  test('DELETE_TASK action removes task by id', () => {
    const initialCount = store.getState().tasks.length;
    const taskToDelete = store.getState().tasks[0];

    store.dispatch(actions.deleteTask(taskToDelete.id));
    const state = store.getState();

    expect(state.tasks.length).toBe(initialCount - 1);
    expect(state.tasks.some((t) => t.id === taskToDelete.id)).toBe(false);
  });
});
