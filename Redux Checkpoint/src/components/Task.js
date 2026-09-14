import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask, deleteTask } from '../redux/actions';

/**
 * Task component represents a single ToDo item.
 * Attributes:
 * - id: unique identifier
 * - description: task text
 * - isDone: boolean completion status
 *
 * Capabilities:
 * - Toggle done / not done
 * - Edit task description (inline mode)
 * - Delete task
 */
const Task = ({ task }) => {
  const { id, description, isDone } = task;
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editError, setEditError] = useState('');

  const handleToggle = () => {
    dispatch(toggleTask(id));
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (!editedDescription.trim()) {
      setEditError('Description cannot be empty.');
      return;
    }
    dispatch(editTask(id, editedDescription));
    setIsEditing(false);
    setEditError('');
  };

  const handleCancelEdit = () => {
    setEditedDescription(description);
    setIsEditing(false);
    setEditError('');
  };

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  return (
    <div className={`task-item ${isDone ? 'task-completed' : ''}`}>
      <div className="task-content-left">
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={isDone}
            onChange={handleToggle}
            aria-label={`Mark "${description}" as ${isDone ? 'not done' : 'done'}`}
          />
          <span className="checkmark"></span>
        </label>

        {isEditing ? (
          <form onSubmit={handleSaveEdit} className="edit-form">
            <input
              type="text"
              className="edit-input"
              value={editedDescription}
              onChange={(e) => {
                setEditedDescription(e.target.value);
                if (editError) setEditError('');
              }}
              autoFocus
              aria-label="Edit task description"
            />
            {editError && <span className="edit-error">{editError}</span>}
          </form>
        ) : (
          <div className="task-text-group">
            <span className={`task-description ${isDone ? 'completed-text' : ''}`}>
              {description}
            </span>
            <span className={`status-pill ${isDone ? 'pill-done' : 'pill-pending'}`}>
              {isDone ? 'Done' : 'Pending'}
            </span>
          </div>
        )}
      </div>

      <div className="task-actions">
        {isEditing ? (
          <>
            <button
              type="button"
              className="btn-action btn-save"
              onClick={handleSaveEdit}
              title="Save changes"
            >
              Save
            </button>
            <button
              type="button"
              className="btn-action btn-cancel"
              onClick={handleCancelEdit}
              title="Cancel editing"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="btn-action btn-edit"
              onClick={() => {
                setEditedDescription(description);
                setIsEditing(true);
              }}
              title="Edit task description"
              aria-label={`Edit "${description}"`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              <span>Edit</span>
            </button>
            <button
              type="button"
              className="btn-action btn-delete"
              onClick={handleDelete}
              title="Delete task"
              aria-label={`Delete "${description}"`}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              <span>Delete</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Task;
