import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

/**
 * TaskItem Component
 * Renders an individual task item with props: task, onToggle, onDelete
 * Debugging highlight: Clean prop destructuring and unique key usage in parent list.
 */
function TaskItem({ task, onToggle, onDelete }) {
  if (!task) return null;

  return (
    <Card
      className={`mb-2 border-0 shadow-sm ${task.completed ? 'bg-light' : 'bg-white'}`}
      style={{ borderRadius: '12px', transition: 'all 0.2s ease' }}
    >
      <Card.Body className="p-3 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <input
            type="checkbox"
            className="form-check-input mt-0"
            style={{ width: '1.25rem', height: '1.25rem', cursor: 'pointer' }}
            checked={Boolean(task.completed)}
            onChange={() => onToggle(task.id)}
            aria-label={`Toggle ${task.title}`}
          />
          <div>
            <span
              className={`fw-semibold ${task.completed ? 'text-decoration-line-through text-muted' : 'text-dark'}`}
            >
              {task.title}
            </span>
            <div className="mt-1">
              <Badge bg={task.priority === 'High' ? 'danger' : task.priority === 'Medium' ? 'warning' : 'secondary'} className="px-2 py-1">
                {task.priority}
              </Badge>
            </div>
          </div>
        </div>

        <Button
          variant="outline-danger"
          size="sm"
          className="rounded-pill px-3"
          onClick={() => onDelete(task.id)}
          title="Delete task"
        >
          🗑️ Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TaskItem;
