import React from 'react';
import { Card, Badge } from 'react-bootstrap';

/**
 * Player component displaying FIFA card details with destructuring & default props
 */
function Player({
  name = "Unknown Player",
  team = "Free Agent",
  nationality = "International",
  jerseyNumber = 0,
  age = 20,
  imageUrl = "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&auto=format&fit=crop&q=80"
}) {
  // Inline styles for the Player component
  const cardStyle = {
    width: '100%',
    maxWidth: '280px',
    margin: '15px auto',
    borderRadius: '20px',
    overflow: 'hidden',
    border: 'none',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.12)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    backgroundColor: '#ffffff'
  };

  const imageContainerStyle = {
    position: 'relative',
    height: '240px',
    backgroundColor: '#0f172a',
    overflow: 'hidden'
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const jerseyBadgeStyle = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    backdropFilter: 'blur(8px)',
    color: '#fbbf24',
    fontSize: '1rem',
    fontWeight: '800',
    padding: '6px 12px',
    borderRadius: '50px',
    border: '1px solid rgba(251, 191, 36, 0.4)'
  };

  const infoRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px 0',
    borderBottom: '1px solid #f1f5f9',
    fontSize: '0.875rem'
  };

  return (
    <Card style={cardStyle} className="h-100 player-card">
      <div style={imageContainerStyle}>
        <Card.Img variant="top" src={imageUrl} alt={name} style={imgStyle} />
        <span style={jerseyBadgeStyle}>#{jerseyNumber}</span>
      </div>

      <Card.Body style={{ padding: '1.25rem' }}>
        <div style={{ marginBottom: '0.75rem' }}>
          <Badge bg="warning" text="dark" className="px-2 py-1 mb-2 fw-bold" style={{ fontSize: '0.75rem' }}>
            FIFA ULTIMATE
          </Badge>
          <Card.Title style={{ fontWeight: '800', fontSize: '1.25rem', color: '#0f172a', marginBottom: '0' }}>
            {name}
          </Card.Title>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={infoRowStyle}>
            <span style={{ color: '#64748b', fontWeight: '500' }}>Team:</span>
            <span style={{ fontWeight: '700', color: '#1e293b' }}>{team}</span>
          </div>

          <div style={infoRowStyle}>
            <span style={{ color: '#64748b', fontWeight: '500' }}>Nationality:</span>
            <span style={{ fontWeight: '700', color: '#1e293b' }}>{nationality}</span>
          </div>

          <div style={{ ...infoRowStyle, borderBottom: 'none' }}>
            <span style={{ color: '#64748b', fontWeight: '500' }}>Age:</span>
            <span style={{ fontWeight: '700', color: '#1e293b' }}>{age} yrs</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

// Default props definition
Player.defaultProps = {
  name: "Unknown Player",
  team: "Free Agent",
  nationality: "International",
  jerseyNumber: 0,
  age: 20,
  imageUrl: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&auto=format&fit=crop&q=80"
};

export default Player;
