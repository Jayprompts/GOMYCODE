import React from 'react';
import UserList from './UserList';

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        {/* Header Branding */}
        <header className="app-header">
          <div className="badge-checkpoint">GoMyCode — API Checkpoint</div>
          <h1 className="app-title">UserSphere Directory</h1>
          <p className="app-subtitle">
            Consuming real-world REST API data using <strong>Axios</strong> &amp; React{' '}
            <strong>useEffect</strong> Hook
          </p>
        </header>

        {/* UserList Component */}
        <main>
          <UserList />
        </main>

        {/* Footer */}
        <footer className="app-footer">
          <p>
            API Checkpoint • Powered by{' '}
            <a
              href="https://jsonplaceholder.typicode.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              JSONPlaceholder
            </a>{' '}
            &amp; <strong>Axios</strong>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
