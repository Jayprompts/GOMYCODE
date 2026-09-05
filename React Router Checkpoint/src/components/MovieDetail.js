import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Badge, Button, Card } from 'react-bootstrap';

/**
 * MovieDetail Component
 * Displays full movie plot synopsis, trailer embed video, and back-to-home navigation.
 */
function MovieDetail({ movies = [] }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => String(m.id) === String(id));

  // Render star ratings (out of 5)
  const renderStars = (rate) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rate ? '#fbbf24' : '#475569', fontSize: '1.25rem' }}>
          ★
        </span>
      );
    }
    return stars;
  };

  if (!movie) {
    return (
      <Container className="py-5 text-center">
        <div
          className="p-5 rounded-4 mx-auto"
          style={{
            maxWidth: '600px',
            backgroundColor: 'rgba(30, 41, 59, 0.7)',
            border: '1px dashed rgba(255, 255, 255, 0.2)'
          }}
        >
          <div className="fs-1 mb-3">🎬❓</div>
          <h2 className="text-white fw-bold mb-2">Movie Not Found</h2>
          <p className="text-secondary mb-4">
            The movie you are looking for does not exist or has been removed.
          </p>
          <Button variant="danger" className="rounded-pill px-4 py-2 fw-semibold" onClick={() => navigate('/')}>
            ← Back to Home
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      {/* Navigation Bar */}
      <div className="mb-4 d-flex justify-content-between align-items-center">
        <Link
          to="/"
          className="btn btn-outline-light rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 fw-semibold shadow-sm"
          style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
        >
          <span>←</span> Back to Home
        </Link>
        <Badge bg="danger" className="px-3 py-2 rounded-pill fs-6">
          ⭐ {movie.rating}/5 Stars
        </Badge>
      </div>

      {/* Main Content Card */}
      <Card
        className="border-0 shadow-lg overflow-hidden text-light rounded-4 mb-5"
        style={{
          backgroundColor: '#1e293b',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Card.Body className="p-4 p-lg-5">
          {/* Movie Title & Rating Header */}
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25">
            <div>
              <h1 className="fw-bolder display-5 text-white mb-2">{movie.title}</h1>
              <div className="d-flex align-items-center gap-2">
                <div className="d-flex">{renderStars(movie.rating)}</div>
                <span className="text-secondary small">({movie.rating} out of 5 stars)</span>
              </div>
            </div>
          </div>

          {/* Embedded Trailer Video (Responsive 16:9 Aspect Ratio) */}
          <div className="mb-5">
            <h3 className="fs-5 fw-bold text-white-50 text-uppercase mb-3" style={{ letterSpacing: '0.06em' }}>
              Official Trailer
            </h3>
            <div
              className="rounded-4 overflow-hidden shadow-lg position-relative"
              style={{
                width: '100%',
                paddingTop: '56.25%', // 16:9 aspect ratio
                backgroundColor: '#0f172a',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              {movie.trailerURL ? (
                <iframe
                  title={`${movie.title} Trailer`}
                  src={movie.trailerURL}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="position-absolute top-0 start-0 w-100 h-100 border-0"
                />
              ) : (
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-muted">
                  No trailer video available
                </div>
              )}
            </div>
          </div>

          {/* Movie Details & Plot Synopsis */}
          <Row className="g-4 align-items-start">
            <Col xs={12} md={4} lg={3}>
              <div
                className="rounded-4 overflow-hidden shadow"
                style={{ backgroundColor: '#0f172a', maxHeight: '420px' }}
              >
                <img
                  src={movie.posterURL}
                  alt={movie.title}
                  className="w-100 h-100 object-fit-cover rounded-4"
                  style={{ objectFit: 'cover', maxHeight: '420px' }}
                />
              </div>
            </Col>

            <Col xs={12} md={8} lg={9}>
              <h3 className="fs-4 fw-bold text-white mb-3">Plot Synopsis</h3>
              <p
                className="text-secondary fs-5"
                style={{ lineHeight: '1.8', fontWeight: 400 }}
              >
                {movie.description}
              </p>

              <hr className="border-secondary border-opacity-25 my-4" />

              <div className="d-flex flex-wrap gap-3">
                <Button
                  variant="danger"
                  className="rounded-pill px-4 py-2 fw-bold"
                  onClick={() => navigate('/')}
                >
                  ← Return to Movie List
                </Button>
                {movie.trailerURL && (
                  <a
                    href={movie.trailerURL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light rounded-pill px-4 py-2 fw-semibold"
                  >
                    Open Trailer in YouTube ↗
                  </a>
                )}
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MovieDetail;
