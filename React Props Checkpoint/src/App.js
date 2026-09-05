import React from 'react';
import { Container, Badge } from 'react-bootstrap';
import PlayersList from './PlayersList';

/**
 * Root App component rendering the FIFA Players List
 */
function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at 10% 10%, #1e1b4b 0%, #0f172a 50%, #020617 100%)',
        color: '#ffffff',
        padding: '3rem 1rem 5rem 1rem',
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
      }}
    >
      <Container>
        {/* Header Title & FIFA Theme Badge */}
        <div className="text-center mb-5">
          <Badge
            bg="warning"
            text="dark"
            className="px-3 py-2 rounded-pill text-uppercase fw-bolder mb-3 shadow"
            style={{ letterSpacing: '0.1em' }}
          >
            ⚽ FIFA Ultimate Team
          </Badge>
          <h1
            className="display-4 fw-bolder mb-2"
            style={{
              letterSpacing: '-0.02em',
              background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Player Card Gallery
          </h1>
          <p className="text-secondary mx-auto" style={{ maxWidth: '580px', fontSize: '1.1rem' }}>
            Explore world-class football icons rendered through reusable React components with dynamic props and destructuring.
          </p>
        </div>

        {/* PlayersList Component */}
        <PlayersList />
      </Container>
    </div>
  );
}

export default App;
