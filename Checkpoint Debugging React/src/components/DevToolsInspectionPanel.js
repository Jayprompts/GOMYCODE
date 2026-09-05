import React from 'react';
import { Card, Badge, Table } from 'react-bootstrap';

/**
 * DevToolsInspectionPanel
 * Interactive panel showing what React Developer Tools sees in the Component Tree.
 */
function DevToolsInspectionPanel({ user, tasksCount, completedCount }) {
  return (
    <Card
      className="border-0 shadow-sm rounded-4 mb-4 text-light"
      style={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)' }}
    >
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center gap-2">
            <span style={{ color: '#38bdf8', fontSize: '1.25rem' }}>⚛</span>
            <h3 className="fs-5 fw-bold mb-0 text-white">React Developer Tools Inspector</h3>
          </div>
          <Badge bg="info" className="text-dark fw-bold px-3 py-1 rounded-pill">
            Live Component Tree
          </Badge>
        </div>

        <p className="small text-secondary mb-3">
          This panel mirrors what you inspect inside the <strong>Components</strong> tab of React Developer Tools (Props, Hooks, State &amp; Render Hierarchy).
        </p>

        <Table responsive bordered variant="dark" size="sm" className="mb-0" style={{ fontSize: '0.85rem' }}>
          <thead>
            <tr className="text-muted">
              <th>Component</th>
              <th>Type</th>
              <th>Inspected Props / State</th>
              <th>DevTools Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>&lt;App /&gt;</code></td>
              <td>Parent Container</td>
              <td>State: <code>user</code>, <code>tasks [{tasksCount}]</code></td>
              <td><span className="text-success">● Clean State</span></td>
            </tr>
            <tr>
              <td><code>&lt;UserProfile /&gt;</code></td>
              <td>Child Component</td>
              <td>Props: <code>name: "{user.name}"</code>, <code>status: "{user.status}"</code></td>
              <td><span className="text-success">● Props Synced</span></td>
            </tr>
            <tr>
              <td><code>&lt;TaskList /&gt;</code></td>
              <td>Child Component</td>
              <td>Props: <code>tasks: Array({tasksCount})</code>, Hooks: <code>useState(filter)</code></td>
              <td><span className="text-success">● Unique Keys OK</span></td>
            </tr>
            <tr>
              <td><code>&lt;TaskItem /&gt;</code></td>
              <td>Leaf Component</td>
              <td>Props: <code>task</code>, <code>onToggle</code>, <code>onDelete</code></td>
              <td><span className="text-success">● Handlers Bound</span></td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default DevToolsInspectionPanel;
