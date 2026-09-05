import React, { useState } from 'react';
import { Container, Card, Button, Badge } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

// Provide your first name as a variable above the root component
const defaultFirstName = "Jay";

function App() {
  // State allows toggling name on/off to easily demo both "Hello, Jay!" and "Hello, there!"
  const [firstName, setFirstName] = useState(defaultFirstName);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 40%), radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 40%), #f1f5f9',
        padding: '3rem 1rem 5rem 1rem',
        fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
      }}
    >
      <Container style={{ maxWidth: '460px' }}>
        {/* Header Brand / Eyebrow */}
        <div className="text-center mb-4">
          <Badge bg="dark" className="px-3 py-2 rounded-pill text-uppercase fw-semibold mb-2" style={{ letterSpacing: '0.08em' }}>
            ⚡ React &amp; JSX Showcase
          </Badge>
          <h1 className="fw-bolder text-dark fs-2 mb-1">Featured Product</h1>
          <p className="text-muted small">Modular Component Architecture with React-Bootstrap</p>
        </div>

        {/* React-Bootstrap Card containing all 4 components */}
        <Card className="shadow-lg border-0 rounded-4 overflow-hidden mb-4" style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
          {/* 1. Image Component */}
          <Image />

          <Card.Body className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <Badge bg="primary" className="px-2 py-1 rounded-pill">
                Premium Audio
              </Badge>
              <span className="text-warning small fw-bold">★★★★★ (4.9)</span>
            </div>

            {/* 2. Name Component */}
            <Name />

            {/* 3. Price Component */}
            <Price />

            {/* 4. Description Component */}
            <Description />

            <div className="d-grid gap-2">
              <Button
                variant="dark"
                size="lg"
                className="rounded-pill fw-semibold shadow-sm py-2"
                style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', border: 'none' }}
              >
                Buy Now — Free Shipping
              </Button>
            </div>
          </Card.Body>
        </Card>

        {/* Greeting Section Below Card */}
        <div
          className="text-center p-4 rounded-4 shadow-sm border bg-white"
          style={{ borderColor: 'rgba(0,0,0,0.08)' }}
        >
          {/* Conditional Greeting Message */}
          <h3 className="fw-bold text-dark fs-4 mb-2">
            {firstName ? `Hello, ${firstName}! 👋` : "Hello, there! 👋"}
          </h3>

          {/* Display an image if first name is provided */}
          {firstName ? (
            <div className="mt-3">
              <div
                className="mx-auto rounded-circle overflow-hidden shadow"
                style={{
                  width: '90px',
                  height: '90px',
                  padding: '3px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
                  alt={`${firstName}'s avatar`}
                  className="rounded-circle w-100 h-100"
                  style={{ objectFit: 'cover', border: '2px solid #ffffff' }}
                />
              </div>
              <p className="small text-muted mt-2 mb-0">Welcome back to your personalized dashboard!</p>
            </div>
          ) : (
            <p className="small text-muted mt-1 mb-0">Provide your first name to unlock your personalized profile avatar.</p>
          )}

          {/* Name Demo Toggle Helper */}
          <div className="mt-3 pt-3 border-top">
            <Button
              variant="outline-secondary"
              size="sm"
              className="rounded-pill px-3"
              onClick={() => setFirstName(firstName ? "" : defaultFirstName)}
            >
              {firstName ? "Test 'Hello, there!' (Clear Name)" : "Test 'Hello, Jay!' (Restore Name)"}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
