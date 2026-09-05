import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

/**
 * MovieList Component
 * Maps over the list of movies and renders MovieCard components
 */
function MovieList({ movies = [] }) {
  if (movies.length === 0) {
    return (
      <div
        className="text-center py-5 my-4 rounded-4"
        style={{
          backgroundColor: 'rgba(30, 41, 59, 0.5)',
          border: '1px dashed rgba(255, 255, 255, 0.15)',
          color: '#94a3b8'
        }}
      >
        <div className="fs-1 mb-2">🎬</div>
        <h4 className="fw-semibold text-light mb-1">No movies found</h4>
        <p className="small mb-0">Try adjusting your title or rating filter, or add a new movie.</p>
      </div>
    );
  }

  return (
    <Row className="g-4">
      {movies.map((movie) => (
        <Col key={movie.id || movie.title} xs={12} sm={6} md={4} lg={3}>
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;
