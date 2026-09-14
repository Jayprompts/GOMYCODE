import React from 'react';
import { useSelector } from 'react-redux';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  const tasks = useSelector((state) => state.tasks);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.isDone).length;
  const pending = total - completed;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="app-wrapper">
      <div className="app-container">
        {/* Application Header */}
        <header className="app-header">
          <div className="badge-checkpoint">GoMyCode — Redux Checkpoint</div>
          <h1 className="app-title">TaskPulse ToDo</h1>
          <p className="app-subtitle">
            Global state management powered by <strong>Redux</strong>
          </p>
        </header>

        {/* Global Statistics Card */}
        <section className="stats-grid" aria-label="Task Statistics">
          <div className="stat-card">
            <div className="stat-value">{total}</div>
            <div className="stat-label">Total Tasks</div>
          </div>
          <div className="stat-card">
            <div className="stat-value stat-completed">{completed}</div>
            <div className="stat-label">Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-value stat-pending">{pending}</div>
            <div className="stat-label">Pending</div>
          </div>
          <div className="stat-card">
            <div className="stat-value stat-rate">{percent}%</div>
            <div className="stat-label">Progress</div>
          </div>
        </section>

        {/* Progress Bar */}
        <div className="progress-container" aria-label={`Progress: ${percent}%`}>
          <div
            className="progress-bar-fill"
            style={{ width: `${percent}%` }}
          ></div>
        </div>

        {/* AddTask Component */}
        <section aria-label="Add Task Section">
          <AddTask />
        </section>

        {/* ListTask Component */}
        <section aria-label="Tasks List Section">
          <ListTask />
        </section>

        {/* App Footer */}
        <footer className="app-footer">
          <p>
            Redux Checkpoint • Built with <strong>React</strong> &amp; <strong>Redux</strong>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
