import React, { Component } from 'react';
import { Container, Card, Button, Badge } from 'react-bootstrap';

/**
 * App Component - Class-based component with Person state, toggle button,
 * and lifecycle time interval tracking (componentDidMount & componentWillUnmount).
 */
class App extends Component {
  constructor(props) {
    super(props);
    // Initial state containing Person object, shows boolean, and timeInterval counter
    this.state = {
      Person: {
        fullName: "Dr. Elena Vance",
        bio: "Senior AI Research Scientist & Creative Technologist specializing in neural network interfaces, modern web frameworks, and human-computer symbiosis.",
        imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
        profession: "Lead AI Systems Architect & Full-Stack Engineer"
      },
      shows: false,
      timeInterval: 0
    };

    this.timer = null;
  }

  // Component lifecycle: set up interval when mounted
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  // Component lifecycle: clean up interval to prevent memory leaks
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  // Toggle the boolean shows state
  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows
    }));
  };

  // Helper to format elapsed seconds into MM:SS
  formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  render() {
    const { Person, shows, timeInterval } = this.state;

    return (
      <div
        style={{
          minHeight: '100vh',
          background: 'radial-gradient(circle at 20% 20%, #1e1b4b 0%, #0f172a 50%, #020617 100%)',
          color: '#ffffff',
          padding: '3rem 1rem 5rem 1rem',
          fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        }}
      >
        <Container style={{ maxWidth: '540px' }}>
          {/* Header Title */}
          <div className="text-center mb-4">
            <Badge
              bg="primary"
              className="px-3 py-2 rounded-pill text-uppercase fw-bold mb-3 shadow-sm"
              style={{ letterSpacing: '0.08em' }}
            >
              ⚡ React Class State &amp; Lifecycle
            </Badge>
            <h1 className="fw-bolder fs-2 mb-2">Profile State Manager</h1>
            <p className="text-secondary small">
              Demonstrating class-based state management, lifecycle timers, and conditional rendering.
            </p>
          </div>

          {/* Time Interval Tracker (Mounted Lifecycle Display) */}
          <div
            className="p-3 mb-4 rounded-4 text-center shadow-sm"
            style={{
              backgroundColor: 'rgba(30, 41, 59, 0.7)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="text-secondary small text-uppercase fw-semibold mb-1" style={{ letterSpacing: '0.05em' }}>
              ⏱️ Time Since Component Mounted:
            </div>
            <div className="d-flex justify-content-center align-items-baseline gap-2">
              <span className="fs-3 fw-bold text-warning font-monospace">
                {this.formatTime(timeInterval)}
              </span>
              <span className="text-muted small">({timeInterval} total seconds)</span>
            </div>
          </div>

          {/* Action Toggle Button */}
          <div className="text-center mb-4">
            <Button
              variant={shows ? "outline-danger" : "primary"}
              size="lg"
              className="rounded-pill px-4 py-2 fw-semibold shadow"
              onClick={this.toggleShow}
              style={{
                minWidth: '180px',
                transition: 'all 0.25s ease'
              }}
            >
              {shows ? "✕ Hide Profile" : "👤 Show Profile"}
            </Button>
          </div>

          {/* Conditional Profile Card (Rendered when shows is true) */}
          {shows ? (
            <Card
              className="shadow-lg border-0 rounded-4 overflow-hidden"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: '#0f172a',
                animation: 'fadeIn 0.4s ease'
              }}
            >
              <div style={{ height: '280px', backgroundColor: '#0f172a', overflow: 'hidden' }}>
                <Card.Img
                  variant="top"
                  src={Person.imgSrc}
                  alt={Person.fullName}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <Card.Title className="fw-bolder fs-4 text-dark mb-1">
                      {Person.fullName}
                    </Card.Title>
                    <Badge bg="info" className="text-dark fw-bold px-2 py-1 rounded-pill">
                      {Person.profession}
                    </Badge>
                  </div>
                </div>

                <hr className="my-3" style={{ borderColor: 'rgba(0,0,0,0.08)' }} />

                <div className="mb-2">
                  <div className="text-uppercase text-muted fw-bold small mb-1" style={{ letterSpacing: '0.05em', fontSize: '0.75rem' }}>
                    Biography
                  </div>
                  <Card.Text className="text-secondary" style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                    {Person.bio}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          ) : (
            <div
              className="text-center p-5 rounded-4"
              style={{
                border: '2px dashed rgba(255, 255, 255, 0.15)',
                backgroundColor: 'rgba(255, 255, 255, 0.02)'
              }}
            >
              <div className="fs-1 mb-2">🔒</div>
              <h4 className="fw-semibold fs-5 text-light mb-1">Profile is Hidden</h4>
              <p className="text-muted small mb-0">Click the button above to view the person's profile details.</p>
            </div>
          )}
        </Container>
      </div>
    );
  }
}

export default App;
