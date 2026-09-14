import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTasks } from '../redux/actions';
import Task from './Task';

/**
 * ListTask component:
 * - Renders filter buttons to switch between All, Done, and Not Done
 * - Retrieves tasks and active filter from the Redux store
 * - Displays filtered list of Task components
 */
const ListTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const activeFilter = useSelector((state) => state.filter);

  // Compute counts for filter pills
  const totalCount = tasks.length;
  const doneCount = tasks.filter((t) => t.isDone).length;
  const notDoneCount = tasks.filter((t) => !t.isDone).length;

  // Filter tasks based on Redux filter state
  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === 'DONE') {
      return task.isDone === true;
    }
    if (activeFilter === 'NOT_DONE') {
      return task.isDone === false;
    }
    return true; // 'ALL'
  });

  return (
    <div className="list-task-container">
      {/* Filter Control Header */}
      <div className="filter-bar">
        <div className="filter-buttons" role="tablist" aria-label="Task Filter Tabs">
          <button
            type="button"
            className={`filter-btn ${activeFilter === 'ALL' ? 'active' : ''}`}
            onClick={() => dispatch(filterTasks('ALL'))}
            role="tab"
            aria-selected={activeFilter === 'ALL'}
          >
            All <span className="filter-count">{totalCount}</span>
          </button>
          <button
            type="button"
            className={`filter-btn ${activeFilter === 'DONE' ? 'active' : ''}`}
            onClick={() => dispatch(filterTasks('DONE'))}
            role="tab"
            aria-selected={activeFilter === 'DONE'}
          >
            Done <span className="filter-count">{doneCount}</span>
          </button>
          <button
            type="button"
            className={`filter-btn ${activeFilter === 'NOT_DONE' ? 'active' : ''}`}
            onClick={() => dispatch(filterTasks('NOT_DONE'))}
            role="tab"
            aria-selected={activeFilter === 'NOT_DONE'}
          >
            Not Done <span className="filter-count">{notDoneCount}</span>
          </button>
        </div>

        <div className="filter-summary">
          Showing <strong>{filteredTasks.length}</strong> of {totalCount} task{totalCount === 1 ? '' : 's'}
        </div>
      </div>

      {/* Task List Rendering */}
      <div className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📝</div>
            <h3 className="empty-title">
              {activeFilter === 'DONE'
                ? 'No completed tasks yet'
                : activeFilter === 'NOT_DONE'
                ? 'All caught up! No pending tasks.'
                : 'Your task list is empty'}
            </h3>
            <p className="empty-desc">
              {activeFilter === 'DONE'
                ? 'Complete a task by checking the circle beside it.'
                : activeFilter === 'NOT_DONE'
                ? 'Great job! Add a new task above if you have more goals.'
                : 'Start by adding a task using the input field above.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListTask;
