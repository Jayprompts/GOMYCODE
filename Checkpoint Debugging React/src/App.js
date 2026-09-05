import React, { useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import UserProfile from './components/UserProfile';
import TaskList from './components/TaskList';
import DevToolsInspectionPanel from './components/DevToolsInspectionPanel';

/**
 * Root App Component
 * Demonstrates component architecture, state management, and props passing
 * designed for inspection and verification using React Developer Tools.
 */
function App() {
  // Initial User State
  const [user, setUser] = useState({
    name: "Alex Morgan",
    role: "Senior React Architect",
    status: "Active",
    bio: "Passionate frontend developer crafting resilient web applications with modern component structures and efficient state debugging.",
    likesCount: 42,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
  });

  // Initial Tasks State
  const [tasks, setTasks] = useState([
    { id: 'task-1', title: 'Inspect Component Tree in React DevTools', priority: 'High', completed: true },
    { id: 'task-2', title: 'Verify Props passing without direct mutations', priority: 'Medium', completed: true },
    { id: 'task-3', title: 'Audit reconciliation keys in dynamic lists', priority: 'High', completed: false },
    { id: 'task-4', title: 'Profile render durations in DevTools Profiler', priority: 'Low', completed: false }
  ]);

  // Handlers demonstrating proper functional state updates (prev => next)
  const handleToggleStatus = () => {
    setUser((prevUser) => ({
      ...prevUser,
      status: prevUser.status === 'Active' ? 'Busy' : 'Active'
    }));
  };

  const handleLike = () => {
    setUser((prevUser) => ({
      ...prevUser,
      likesCount: prevUser.likesCount + 1
    }));
  };

  const handleToggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at 10% 10%, #1e1b4b 0%, #0f172a 50%, #020617 100%)',
        padding: '3rem 1rem 5rem 1rem',
        fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
      }}
    >
      <Container style={{ maxWidth: '900px' }}>
        {/* Header Section */}
        <div className="text-center mb-5">
          <Badge
            bg="info"
            text="dark"
            className="px-3 py-2 rounded-pill text-uppercase fw-bold mb-3 shadow"
            style={{ letterSpacing: '0.08em' }}
          >
            ⚛ React Developer Tools Debugging Suite
          </Badge>
          <h1
            className="display-5 fw-bolder text-white mb-2"
            style={{ letterSpacing: '-0.02em' }}
          >
            Debugging React Architecture
          </h1>
          <p className="text-secondary mx-auto" style={{ maxWidth: '650px', fontSize: '1.05rem' }}>
            Inspect components, verify props flow, audit reconciliation keys, and monitor state updates in real-time.
          </p>
        </div>

        {/* Live DevTools Inspection Panel */}
        <DevToolsInspectionPanel
          user={user}
          tasksCount={tasks.length}
          completedCount={completedCount}
        />

        {/* Two-Column App Layout */}
        <Row className="g-4">
          {/* User Profile Component (Props & State) */}
          <Col xs={12} md={5}>
            <UserProfile
              user={user}
              onToggleStatus={handleToggleStatus}
              onLike={handleLike}
            />
          </Col>

          {/* Task List Component (Lists, Keys, Events) */}
          <Col xs={12} md={7}>
            <TaskList
              tasks={tasks}
              onToggleTask={handleToggleTask}
              onDeleteTask={handleDeleteTask}
              onAddTask={handleAddTask}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
