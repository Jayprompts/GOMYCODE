import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

/**
 * MovieCard Component
 * Displays movie details: title, description, posterURL, and rating.
 * Clicking the card routes the user to the movie description and trailer view (/movie/:id).
 */
function MovieCard({ movie }) {
  const navigate = useNavigate();

  if (!movie) return null;

  const { id, title, description, posterURL, rating } = movie;

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

  const handleCardClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <Card
      onClick={handleCardClick}
      className="h-100 border-0 shadow-lg overflow-hidden text-light"
      style={{
        backgroundColor: '#1e293b',
        borderRadius: '16px',
        cursor: 'pointer',
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

        <div
          className="position-absolute bottom-0 start-0 end-0 p-2 d-flex justify-content-center"
          style={{
            background: 'linear-gradient(to top, rgba(15,23,42,0.9), transparent)'
          }}
        >
          <span className="badge rounded-pill bg-danger bg-opacity-75 px-3 py-1 small">
            ▶ Watch Trailer &amp; Details
          </span>
        </div>
      </div>

      <Card.Body className="p-3 d-flex flex-column">
        <div className="mb-2">
          <Card.Title className="fw-bold fs-5 text-white mb-1">{title}</Card.Title>
          <div className="d-flex align-items-center gap-1">
            {renderStars(rating)}
          </div>
        </div>

        <Card.Text className="text-secondary small flex-grow-1 mb-3" style={{ lineHeight: '1.6' }}>
          {description.length > 110 ? `${description.slice(0, 110)}...` : description}
        </Card.Text>

        <Button
          variant="outline-danger"
          size="sm"
          className="w-100 rounded-pill fw-semibold mt-auto"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/movie/${id}`);
          }}
        >
          View Trailer &amp; Plot →
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
