import React, { useState } from 'react';
import { Card, Button, Form, InputGroup, ButtonGroup } from 'react-bootstrap';
import TaskItem from './TaskItem';

/**
 * TaskList Component
 * Demonstrates list state management, filtering, and reconciliation key handling.
 */
function TaskList({ tasks = [], onToggleTask, onDeleteTask, onAddTask }) {
  const [filter, setFilter] = useState('all');
  const [newTitle, setNewTitle] = useState('');
  const [newPriority, setNewPriority] = useState('Medium');

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    onAddTask({
      id: 'task-' + Date.now(),
      title: newTitle.trim(),
      priority: newPriority,
      completed: false
    });

    setNewTitle('');
  };

  // Filtered task list
  const filteredTasks = tasks.filter((t) => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  return (
    <Card className="border-0 shadow-sm rounded-4 mb-4 bg-white">
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
          <h3 className="fs-5 fw-bold text-dark mb-0">Project Tasks ({tasks.length})</h3>
          
          {/* Status Filter Tabs */}
          <ButtonGroup size="sm">
            <Button
              variant={filter === 'all' ? 'primary' : 'outline-secondary'}
              onClick={() => setFilter('all')}
            >
              All ({tasks.length})
            </Button>
            <Button
              variant={filter === 'active' ? 'primary' : 'outline-secondary'}
              onClick={() => setFilter('active')}
            >
              Active ({tasks.filter(t => !t.completed).length})
            </Button>
            <Button
              variant={filter === 'completed' ? 'primary' : 'outline-secondary'}
              onClick={() => setFilter('completed')}
            >
              Done ({tasks.filter(t => t.completed).length})
            </Button>
          </ButtonGroup>
        </div>

        {/* Task Creation Form */}
        <Form onSubmit={handleAddSubmit} className="mb-3">
          <InputGroup>
            <Form.Control
              placeholder="Add a new task..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <Form.Select
              value={newPriority}
              onChange={(e) => setNewPriority(e.target.value)}
              style={{ maxWidth: '120px' }}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Form.Select>
            <Button variant="dark" type="submit">
              + Add
            </Button>
          </InputGroup>
        </Form>

        {/* Tasks List */}
        <div>
          {filteredTasks.length === 0 ? (
            <div className="text-center py-4 text-muted small">
              No tasks found for this filter.
            </div>
          ) : (
            filteredTasks.map((task) => (
              /* Essential React DevTools inspection item: Unique key prop avoiding index mismatch */
              <TaskItem
                key={task.id}
                task={task}
                onToggle={onToggleTask}
                onDelete={onDeleteTask}
              />
            ))
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default TaskList;
