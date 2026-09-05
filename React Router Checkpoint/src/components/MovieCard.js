import React from 'react';
import { Card } from 'react-bootstrap';

/**
 * MovieCard Component
 * Displays movie details: title, description, posterURL, and rating.
 */
function MovieCard({ movie }) {
  if (!movie) return null;

  const { title, description, posterURL, rating } = movie;

  // Render star ratings (out of 5)
  const renderStars = (rate) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rate ? '#fbbf24' : '#475569', fontSize: '1.1rem' }}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <Card
      className="h-100 border-0 shadow-lg overflow-hidden text-light"
      style={{
        backgroundColor: '#1e293b',
        borderRadius: '16px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
    >
      <div style={{ position: 'relative', height: '340px', backgroundColor: '#0f172a', overflow: 'hidden' }}>
        <Card.Img
          variant="top"
          src={posterURL}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            backgroundColor: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(8px)',
            borderRadius: '50px',
            padding: '4px 10px',
            border: '1px solid rgba(251, 191, 36, 0.3)'
          }}
        >
          <span className="text-warning fw-bold small">⭐ {rating}/5</span>
        </div>
      </div>

      <Card.Body className="p-3 d-flex flex-column">
        <div className="mb-2">
          <Card.Title className="fw-bold fs-5 text-white mb-1">{title}</Card.Title>
          <div className="d-flex align-items-center gap-1">
            {renderStars(rating)}
          </div>
        </div>

        <Card.Text className="text-secondary small flex-grow-1" style={{ lineHeight: '1.6' }}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
