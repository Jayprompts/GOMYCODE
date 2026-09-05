import React from 'react';
import { Card, Form, InputGroup, Row, Col, Button } from 'react-bootstrap';

/**
 * Filter Component
 * Filters movies by title and minimum rating
 */
function Filter({ titleFilter, onTitleChange, ratingFilter, onRatingChange, onReset }) {
  return (
    <Card
      className="border-0 shadow-sm rounded-4 mb-4"
      style={{
        backgroundColor: 'rgba(30, 41, 59, 0.7)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Card.Body className="p-3 p-md-4">
        <Row className="g-3 align-items-center">
          {/* Title Search Input */}
          <Col xs={12} md={7}>
            <Form.Label className="small text-secondary fw-bold text-uppercase mb-1" style={{ letterSpacing: '0.05em' }}>
              Search Movie Title
            </Form.Label>
            <InputGroup>
              <InputGroup.Text
                style={{
                  backgroundColor: '#0f172a',
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#94a3b8'
                }}
              >
                🔍
              </InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Type movie title (e.g. Inception)..."
                value={titleFilter}
                onChange={(e) => onTitleChange(e.target.value)}
                style={{
                  backgroundColor: '#0f172a',
                  borderColor: 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff'
                }}
              />
            </InputGroup>
          </Col>

          {/* Rating Dropdown Filter */}
          <Col xs={12} sm={8} md={3}>
            <Form.Label className="small text-secondary fw-bold text-uppercase mb-1" style={{ letterSpacing: '0.05em' }}>
              Minimum Rating
            </Form.Label>
            <Form.Select
              value={ratingFilter}
              onChange={(e) => onRatingChange(Number(e.target.value))}
              style={{
                backgroundColor: '#0f172a',
                borderColor: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              <option value="0">All Ratings (0+ ⭐)</option>
              <option value="2">2 Stars &amp; Above (★★☆☆☆)</option>
              <option value="3">3 Stars &amp; Above (★★★☆☆)</option>
              <option value="4">4 Stars &amp; Above (★★★★☆)</option>
              <option value="5">5 Stars Only (★★★★★)</option>
            </Form.Select>
          </Col>

          {/* Reset Filters Button */}
          <Col xs={12} sm={4} md={2} className="d-flex align-items-end">
            <Button
              variant="outline-secondary"
              className="w-100 rounded-3 text-light"
              onClick={onReset}
              style={{ borderColor: 'rgba(255,255,255,0.2)', height: '38px' }}
            >
              Reset
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Filter;
